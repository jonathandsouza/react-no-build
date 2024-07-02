const React = this.React;
const ReactDOM = this.ReactDOM;
const _jsx = this.jsx;

function App() {
    const [count, setCount] = React.useState(0);
    debugger;
    React.useEffect(() => {
        debugger;
    }, []);
    return /*#__PURE__*/_jsx("h1", {
        children: "HELLO NO JSX"
    });
}
ReactDOM.createRoot(document.getElementById('root')).render( /*#__PURE__*/_jsx(React.StrictMode, {
    children: /*#__PURE__*/_jsx(App, {})
}));