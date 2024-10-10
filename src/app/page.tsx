"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { encrypt } from "./_lib/encrypt";
import { useState } from "react";
import { decrypt } from "./_lib/decrypt";


export default function Home() {
  const [text,setText]=useState<string>("");
  const [pass,setPass]=useState<string>("")
  const [option,setOption]=useState<string>("encryption")
  const [optainedText,setOptainedText]=useState<string>("")
  const [isCopy,setIsCopy]=useState<boolean>(false)


  const handleEncrypt=()=>{
   const encryptedText= encrypt(text,pass)
   setOptainedText(encryptedText)
  //  console.log(encryptedText)
  }
  const handleDecrypt=()=>{
    const decryptedText= decrypt(text,pass)
    setOptainedText(decryptedText)
    // console.log(decryptedText)
   }
   const handleCopy=()=>{
    navigator.clipboard.writeText(optainedText);
    setIsCopy(true);
    setTimeout(()=>{setIsCopy(false)},1500)
   }
  return (

    
    <div className={styles.page}>
     <div className="container">
     
     <div className={styles.container}>
  <div className={styles.switchesContainer}>
    <input type="radio" id="switchMonthly" name="switchPlan" value="encryption" onChange={()=>{setOption("encryption")}} defaultChecked />
    <input type="radio" id="switchYearly" name="switchPlan" value="decryption"  onChange={()=>{setOption("decrytion")}} />
    <label htmlFor="switchMonthly">Encryption</label>
    <label htmlFor="switchYearly">Decryption</label>
    <div className={styles.switchWrapper}>
      <div className={styles.switch}>
        <div>Encryption</div>
        <div>Decryption</div>
      </div>
    </div>
  </div>
 
</div>
     
  <label htmlFor="textArea" className="form-label" style={{
    fontSize: "1.5rem",
    fontWeight:"bold"
  }}>{option==="decryption"?"Enter Encrypted Text":"Enter Plan Text"} </label>
  <textarea className="form-control" id="textArea" rows={5} value={text} onChange={(e)=>setText(e.target.value)}></textarea>
  <label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" value={pass} aria-describedby="passwordHelpBlock" onChange={(e)=>setPass(e.target.value)}/>
 {option==="encryption"? <button type="button" className="btn btn-primary my-3 mb-2" onClick={handleEncrypt}>Encrypt Text</button>:
  <button type="button" className="btn btn-primary my-3 mb-2" onClick={handleDecrypt}>Decrypt Text</button>}
  <button type="button" className="btn btn-primary my-3 mb-2 mx-2" onClick={()=>{setText("");setPass("");}}>Clear Text</button>
<div>
<label htmlFor="textArea" className="form-label mt-5" style={{
    fontSize: "1.5rem",
    fontWeight:"bold"
  }}>{option==="decryption"?"Optained Pain Text":"Optained Encrypted Text"} </label>
  <textarea className="form-control" id="textArea" rows={3} value={optainedText} disabled></textarea>

  {!isCopy &&
    <button type="button" className="btn btn-primary my-3 mb-2" onClick={handleCopy}>Copy on Clipboard</button>}
 { isCopy &&
  <div className="alert alert-success my-3 " role="alert">
  Copied successfully !!!
</div>}

</div>


</div>

    </div>
  );
}
