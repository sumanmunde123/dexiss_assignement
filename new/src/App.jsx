// import React from 'react';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import Template from './Components/Template';
import TemplateForm from './Components/TemplateForm';
import Documents from './Components/Document';

// import TemplateForm from "./Components/TemplateForm";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' index element={<Home />}/>
        <Route path='/template' index element={<Template />}/>
        <Route path='/document' index element={<Documents />}/>
        <Route path='/templateform' index element={<TemplateForm />}/>
      </Routes>
   
      {/* <Home /> */}
      {/* <Template /> */}
      {/* <TemplateForm /> */}
    </div>
  );
}

export default App;
