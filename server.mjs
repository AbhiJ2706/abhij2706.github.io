function ProjectDiv(props){
    console.log(props.h1);
    return (<h1>doot</h1>);
  }
  
  const element = <ProjectDiv h1="hello" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
  
  console.log("this ran")