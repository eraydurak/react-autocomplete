import {useEffect, useRef, useState} from 'react';
import './App.scss';


const App =() => {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState(false);
  const searchRef = useRef();
  const isTyping = search.replace(/\s+/,'').length > 0;

  useEffect(()=> {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (e)=> {
    if(searchRef.current && !searchRef.current.contains(e.target)){
      setSearch('')
    }
  }
  
  useEffect(()=>{
    if(isTyping){
      const filteredResult = data.filter(item => item.title.includes(search))
      setResult(filteredResult.length > 0 ? filteredResult : false)
    } else {
      setResult([false])
    }

  },[search])

  const data = [
    {
      id:1,
      title:"test 1"
    },
    {
      id:2,
      title:"Test 2"
    },
    {
      id:3,
      title:"deneme 1"
    },
    {
      id:4,
      title:"Deneme 3"
    },
    {
      id:5,
      title:"Deneme 4"
    },
    {
      id:6,
      title:"Deneme 5"
    },
    {
      id:7,
      title:"Deneme 6"
    },
    {
      id:8,
      title:"Deneme 7"
    },
    {
      id:9,
      title:"Deneme 8"
    }
  ]

  return (
    <div className="search" ref={searchRef}>
      <input value={search} className={isTyping ? 'typing' : null} placeholder="Ara..." type="text" onChange={(e)=>setSearch(e.target.value)} />
      {isTyping && (
        <div className="search-result">
          {result && result.map(item =>(
            <div key={item.id} className="search-result-item">
              {item.title}
            </div>
          ))}
      {!result && (
        <div className="result-not-found" >
         <p> We couldn't find "{search}" !</p>
        </div>
      )}
        </div>
      )}
    </div>
  );
}

export default App;
