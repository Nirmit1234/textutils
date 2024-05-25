import React,{useState} from 'react'

export default function About(){
    const [mystyle,setmystyle] = useState({
        color: 'white',
        backgroundColor : 'black'
    })
    const [btnTxt,setBtnText] = useState("Enable Dark Mode")
    const togglestyle = ()=>{
        if(mystyle.color === 'white'){
            setmystyle({
                color: 'black',
                backgroundColor : 'white',
                border : '2px solid white'
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setmystyle({
                color: 'white',
                backgroundColor : 'dark',
                border : '2px solid white'
            })
            setBtnText("Enable light Mode");
        }
    }
  return (
    <>
    <div>
        <div className="accordion" style = {mystyle} id="accordionExample">
            <h1>About Us</h1>
            <div className="accordion-item" style = {mystyle} >
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {mystyle} >
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>  
    </div>
    <div className="container my-3">
    <button onClick ={togglestyle} className="btn btn-primary">{btnTxt}</button>
    </div>
    </>
  )
}
