import { useState, useCallback, useEffect, useRef } from "react";
import Button from "../components/passwordGenerator/Button";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [useNum, setUseNum] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const [pass, setPass] = useState("");
  const passRef = useRef(null);

  const copyPassToClipBoard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 15);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const passGen = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (useNum) str = str + "0123456789";
    if (useChar) str = str + "!@#$%&*~`=+-_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password = password + str.charAt(char);
    }
    setPass(password);
  }, [length, useNum, useChar]);

  useEffect(() => {
    passGen();
  }, [length, useNum, useChar, passGen]);

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/PassGen.png')`,
        }}
      >
        <div className="  mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
          <h1 className="text-white my-3">Password Generator</h1>
          <div className="flex shadow rounded-lg bg-white overflow-hidden mb-4">
            <Button fun={passGen} btnName={"Generate New"} />
            <input
              className="outline-none w-full py-1 px-3"
              type="text"
              value={pass}
              placeholder="Password"
              readOnly
              ref={passRef}
            />
            <Button fun={copyPassToClipBoard} btnName={"Copy"} />
          </div>
          <div className="flex shadow round-lg overflow-hidden mb-4 justify-around">
            <div className="flex item-center gap-x-1">
              <input
                id="length"
                className="cursor-pointer"
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="length">Length: {length}</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                id="number"
                className="cursor-pointer"
                defaultChecked={useNum}
                type="checkbox"
                onChange={() => {
                  setUseNum((prev) => !prev);
                }}
              />
              <label htmlFor="number">Number</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                id="cahracter"
                className="cursor-pointer"
                defaultChecked={useChar}
                type="checkbox"
                onChange={() => {
                  setUseChar((prev) => !prev);
                }}
              />
              <label htmlFor="character">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
