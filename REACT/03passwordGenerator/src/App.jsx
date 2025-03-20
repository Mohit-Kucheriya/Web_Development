import { useState, useRef, useCallback, useEffect } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const char = "!@#$%^&*()_+";

    if (numbersAllowed) str += number;
    if (charsAllowed) str += char;

    let pass = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, numbersAllowed, charsAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charsAllowed]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      passwordRef.current.setSelectionRange(0, 0);
    }, 1000);
  };

  return (
    <div className="font-poppins mx-auto w-full max-w-lg p-4">
      <h1 className="mb-4 text-center text-3xl font-bold font-medium text-gray-100">
        Password Generator
      </h1>

      <div className="mb-5 flex w-full items-center overflow-hidden rounded-lg shadow-lg">
        <div className="flex-1">
          <input
            type="text"
            className="w-full border-none bg-gray-100 px-3 py-3 text-left font-medium outline-none"
            placeholder="Password"
            value={password}
            readOnly
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
          />
        </div>
        <button
          onClick={() => copyPassword()}
          className="cursor-pointer bg-slate-900 px-3 py-3 text-gray-100"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="flex w-full flex-col items-start gap-2 text-gray-100 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <input
            type="range"
            name=""
            id="length"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length" className="font-regular">
            Length: {length}
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name=""
            id="numbers"
            checked={numbersAllowed}
            onChange={() => setNumbersAllowed((prevNumbers) => !prevNumbers)}
          />
          <label htmlFor="numbers" className="font-regular">
            Numbers
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name=""
            id="chars"
            checked={charsAllowed}
            onChange={() => setCharsAllowed((prevChars) => !prevChars)}
          />
          <label htmlFor="chars" className="font-regular">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
