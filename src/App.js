import Button from './Button';
import { useState } from 'react';
import './App.css'
function App() {
  const [cur, setCur] = useState('');

  function setCurValue(event) {
    let a = event.target.value;
    setCur(cur + a);
  }
  function handelAnswer(){
    let ans= eval(cur);
    setCur(ans)
  }

  return (
    <div>
      <input type="text" value={cur} readOnly />
      <br />

      <Button a="7" onClick={setCurValue} />
      <Button a="8" onClick={setCurValue} />
      <Button a="9" onClick={setCurValue} />
      <Button a="*" onClick={handelAnswer} c="operator" />
      <br />

      <Button a="4" onClick={setCurValue} />
      <Button a="5" onClick={setCurValue} />
      <Button a="6" onClick={setCurValue} />
      <Button a="-" onClick={setCurValue} c="operator" />
      <br />

      <Button a="1" onClick={setCurValue} />
      <Button a="2" onClick={setCurValue} />
      <Button a="3" onClick={setCurValue} />
      <Button a="+" onClick={setCurValue} c="operator" />
      <br />

      <Button a="00" onClick={setCurValue} />
      <Button a="0" onClick={setCurValue} />
      <Button a="." onClick={setCurValue} />
      <Button a="=" onClick={setCurValue} c="operator" />
    </div>
  );
}

export default App;