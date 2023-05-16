import {useState} from "react" ;
const Section = ({title,description,isVisible,setIsVisible})=>{
    return(
        <div className="border border-black p-2 m-2">
            <h1>{title}</h1>
            {
                isVisible?(<button onClick={ ()=>{setIsVisible()}}>Hide</button>):(<button onClick={()=>{setIsVisible() }}>Show</button>)
            }
           { isVisible && <p>{description}</p>  }
        </div>   
    )
}
const Instamart = ()=>{
    const[visibleSection,setVisibleSection] = useState("about");
    return(
        <>
        <h1>Instamart </h1>
        <Section title="About" description="About Description" isVisible={visibleSection==="about"} setIsVisible={()=>{visibleSection==="about" ?setVisibleSection("team"):setVisibleSection("about")}} ></Section>
        <Section title="Team" description="Team Description" isVisible={visibleSection==="team"} setIsVisible={()=>{visibleSection==="team" ?setVisibleSection("about"):setVisibleSection("team")}} ></Section>
        <Section title="Carreer" description="Career Description" isVisible={visibleSection==="carreer"} setIsVisible={()=>{visibleSection==="carreer" ?setVisibleSection("about"):setVisibleSection("carreer")}} ></Section>
        </>
    )
}
export default Instamart;