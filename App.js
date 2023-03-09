const Heading1 = React.createElement('h1',{
    id:'h1Root',
},'Welcome to React JS H1 Tavva');
const Heading2 = React.createElement('h2',{
    id:'h2Root',
},'Welcome to React JS H2 Tavva');
const Container =React.createElement('Container',{
    id:'Container Root'
},[Heading1,Heading2])
const RootHead =ReactDOM.createRoot(document.getElementById('root'));
RootHead.render(Container);