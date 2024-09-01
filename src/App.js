
import './App.css';

function Header () {
    return (
    <>
        <Title/>
        <h2>I am Header Compenent</h2>
    </>
    )
}

function Footer () {
    return (
    <>
        <Title/>
        <h2>I am Footer Compenent</h2>
    </>
    )
}


function Content () {
    return (
        <>
            <Title/>
            <h2>I am Content  Compenent</h2>
        </>
    )
}



function Title (){
     return (
        <h2>Title</h2>
    )
}



function App() {
  return (
    <div className="App">
        <Header/>
        <Footer/>
        <Content/>
    </div>
  );
}

export default App;
