import React from 'react';
import {useState, useEffect} from "react";
import './App.css';

interface JsonData {
  pulse : {
    uri : string,
    version : string,
    cipherSuite : number,
    period : number,
    certificateId : string,
    chainIndex : number,
    pulseIndex : number,
    timeStamp : string,
    localRandomValue : string,
    external : {
      sourceId : string,
      statusCode : number,
      value : string
    },
    listValues : [ {
      uri : string
      type : string,
      value : string
    }, {
      uri : string,
      type : string,
      value : string
    }, {
      uri : string,
      type : string,
      value : string
    }, {
      uri : string,
      type : string,
      value : string
    }, {
      uri : string,
      type : string,
      value : string
    } ],
    precommitmentValue : string,
    statusCode : number,
    signatureValue : string,
    outputValue : string
  }
}

function App() {
  const [data,setData] = useState<string>();

  async function getData() {
      const call = await fetch('https://beacon.nist.gov/beacon/2.0/chain/last/pulse/last'); 
      console.log("call", call)
      const response = await call.json();
      const result = response.pulse.outputValue
      console.log("result",result)
      setData(result);
      console.log("setData",setData(result))
    }

  useEffect(() => {
    getData()
  }, [])

console.log(data)

  return (
    <div className="App">
      <header>
      <h1>Random value provided by the BEACON API</h1>
      </header>

      <main>
      <button>Show me the last random value</button>
      
      <p>{data}</p>
      
      </main>
    </div>
  );
}

export default App;
