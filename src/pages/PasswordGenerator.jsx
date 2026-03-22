import React from "react";
import { useState, useCallback, useEffect, useRef } from "react";
import PasswordDisplay from "../components/PasswordDisplay";
import Controls from "../components/Controls";
import { ToastContainer, toast } from 'react-toastify';



const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //saving the values using usestate
  
  const passwordRef = useRef(null);
  // setting the ref value as null before mounting of component. we set the value as null to avoid erros

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
      // console.log(pass)
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  //The reason why we use usecallback for this function is to memoise it which it prevents unneccessary re-run from useEffect. The function only changes with dependencies.

  useEffect(() => {
    passwordGen();
  }, [passwordGen]);
  
  // Run this effect whenever passwordGen changes. 
 // 1. Initially the when the component renders for the first time an initial password is created by passwordGen.
// 2. But once if we make a change in any of the dependency in passwordGen. useEffect notices it and runs the passwordGen which creates a new password for us.

//3. ***When the project starts for the first time useEffect runs for the first time and as a result passwowdGen() also runs which in turn runs the setPassword() if we don't use useCallBack passwordGen() will be created new with same logic but different then the older version, useEffect checks and runs again which leads to infinite running and error.


//🔄 useEffect is a watcher: it “watches” for changes in certain things, and when they change, it runs a function automatically — at the right time (after React updates everything).

  const copyPasswordToClipboard = (async () => {
    try {
      await navigator.clipboard.writeText(password);
      // small feedback: focus the input so user sees it
      passwordRef.current?.focus();
         toast.success("Copied to clipboard!");
    } catch (err) {
      // fallback: select input
      passwordRef.current?.select();
      console.error("Copy failed:", err);
          toast.error("Copy failed!");
    }
  });
  
 const notify = () => toast("Wow so easy!");

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>

      <PasswordDisplay
        password={password}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        onCopy={copyPasswordToClipboard}
        passwordRef={passwordRef}
        testNotify={notify}
      />

      <Controls
        length={length}
        setLength={setLength}
        numberAllowed={numberAllowed}
        setNumberAllowed={setNumberAllowed}
        charAllowed={charAllowed}
        setCharAllowed={setCharAllowed}
      />

      <div className="mt-3 text-xs text-gray-300">
        Tip: use the "Show" button to preview the password before copying.
      </div>
    </div>
  );
};

export default PasswordGenerator;
