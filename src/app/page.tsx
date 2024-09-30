"use client"

import Nav from "../app/components/Navbar";
import {useRouter} from "next/navigation"

export default function Home() {
 const router = useRouter();
  return (
    <div >
      <Nav />
      <section className="section">

<div className="main-div">
  <h1 className="head">Welcome to My Digital Portfolio</h1>
      <h2>Welcome! I&apos;m Nirma Qureshi, a passionate frontend web developer.</h2>
      <p id="para">As a frontend web developer with one year of practical experience, I am dedicated to enhancing user experiences through effective web design.</p>
      <button id="main-btn"  onClick={()=>router.push("/about")}>About me</button>
  </div>
    </section>
</div>
    
  );
}

  
