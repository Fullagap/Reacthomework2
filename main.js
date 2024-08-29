
function App() {
    const [counters,setCounters] = React.useState([{id:1,number : 0}])
  
    const updateCounter = (id,num,) => {
      // console.log("id",id)
      // if(num<=0){return}
    
      let idx = counters.findIndex(el => el.id === id)
      // console.log("idx",idx)
      const newCounters = [...counters]
      if((newCounters[idx].number+num)<0){return}
      newCounters[idx].number += num
        // newCounters[idx].number += num
      setCounters(newCounters)
      
      
      // console.log(newCounters[idx].number)
      // console.log(newCounters)
    }
  
    const removeArray = (id) => {
      const newCounter = counters.filter(counters => counters.id !== id)
      setCounters(newCounter)
    }
  
    const sumNum = counters.reduce((prev,curr)=> {
      return prev += curr.number
    },0)
    // console.log("sumnum",sumNum)
    return (
      <div className = 'app'>
        <h1 className="show-sum">Sum = {sumNum}</h1>
        <button className="btn-add" onClick = {()=>{
          setCounters([
            ...counters,{
            id: counters.length + 1,
            number : 0}
          ])
        }}>Add Counter</button>
        {/* <button onClick={()=>updateCounter(item.id,10)} className="btn btn-inc-ten">+10</button> */}
        <hr />
        {counters.map(el=>(
          <Counter key = {el.id} item = {el} updateCounter={updateCounter} removeArray={removeArray} />
        ))}
      </div>
    )
  }
  
  
  
  function UpdateAll(props,num) {
  
  }
  
  function Counter(props) {
    // console.log(props)
    const {item,updateCounter,removeArray} = props
    return (
      <div className="counter">
        <button onClick={()=>updateCounter(item.id,-1)} className="btn btn-dec">-</button>
        <h3 className="number">{item.number}</h3>
        <button onClick={()=>updateCounter(item.id,1)} className="btn btn-inc">+</button>
        <button onClick={()=>updateCounter(item.id,-item.number)} className="btn btn-clr">C</button>
        <button onClick={()=>removeArray(item.id)} className="btn btn-clr">X</button>
      </div>
    )
  }
  
  ReactDOM.createRoot(document.querySelector("#root"))
    .render(<App />)