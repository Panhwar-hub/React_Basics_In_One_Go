import Layout from "./components/Layout";
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import NoPage from './components/NoPage'
//import ClickCounter from "./components/ClickCounter";
//import HoverCounter from "./components/HoverCounter";
import { Route, Routes } from "react-router-dom";
import Kids from "./components/Kids";
import Electronics from "./components/Electronics";
import { useState,useContext,useRef } from "react";
import { StudentConsumer,StudentProvider,StudentContext } from "./StudentContext";
import { SubjectConsumer,SubjectProvider, SubjectContext } from "./SubjectProvider";

function ComponentA(){
  return(<>
  <h1>Component - A</h1>
  <ComponentB></ComponentB>
  </>)
}

function ComponentB(){
  const nation = useRef("parvez")
  return(<>
  <h1>Component - B</h1>
  <span>it is like {nation.current}</span>
  <ComponentC></ComponentC>
  </>)
}
function ComponentC(){
 const std = useContext(StudentContext)
 const sub = useContext(SubjectContext)
return(<>
  <h1>Component - C</h1>
  <span>I have got {std.name} with {std.score} and I  am in {sub.name} with score {sub.score}</span>
  <ComponentD></ComponentD>
  </>)
}

function ComponentD(){
  return(<>
 <StudentConsumer>
 {
   std=>{
     return (<>
     <SubjectConsumer>
       {
         sub=> {
           return (<>
           <h1>
             Component - D
           </h1>
           <span> I am {std.name} my score is {std.score}</span>
            <span> i am having course of {sub.name} with score of {sub.socre}</span>
           </>)
         }
       }
     </SubjectConsumer>
     </>)
   }
 }
  </StudentConsumer>
  </>)
}



function CountPlus (props) {
 const [count, setCount] = useState(0);
 function increment() {
   setCount(count+1)
 }
 return <>{props.children(count,increment)}</>
}

function Clickplus(props){
  return(<>
  <button onClick = {props.increment}>Click Me - {props.count}</button>
  </>)
}

function Hoverplus(props){
  return(<>
  <button onMouseOver = {props.increment}>Hover Me - {props.count}</button>
  </>)
}

export default function App() {
  const [subject, setSubject] = useState({name:"EAD", score:200})
  const [student, setStudent] =useState({name: "Parvez", score:1000})
  return (<>
  <Layout></Layout>
  <Routes>     
      <Route path="/" element ={<Home/>}></Route>
      <Route path="about" element ={<About></About>}></Route>
      <Route path="/products" element = {<Products></Products>}>
        <Route path="kids" element={<Kids></Kids>}></Route>
        <Route path="electronics" element={<Electronics></Electronics>}></Route>
      </Route>
      <Route path="*" element= {<NoPage></NoPage>} ></Route>    
  </Routes>
 {/*<CountPlus>
   {(count,inc) => {return <Clickplus count={count} increment= {inc} />}}
 </CountPlus>
 <CountPlus>
   {(count,inc) => {return <Hoverplus count={count} increment = {inc} />}}
  </CountPlus>
  <StudentProvider value={student}>
    <SubjectProvider value={subject}>
    <ComponentA></ComponentA>
    </SubjectProvider>
  </StudentProvider>*/}
  </>
  );}