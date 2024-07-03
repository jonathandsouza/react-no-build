const React = this.React;
const ReactDOM = this.ReactDOM;
const _jsx = this.jsx;
const _jsxs = this.jsxs;
const _Fragment = this.Fragment;

function Display({
    count
}) {
    return /*#__PURE__*/_jsx("h2", {
        children: count
    });
}

function App() {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        debugger;
    }, []);
    return /*#__PURE__*/_jsxs(_Fragment, {
        children: [" ", /*#__PURE__*/_jsx("h1", {
            onClick: () => {
                setCount(c => c + 1);
            },
            children: "HELLO NO JSX"
        }), " ", /*#__PURE__*/_jsx(Display, {
            count: count
        }), " "]
    });
}

ReactDOM.createRoot(document.getElementById('root')).render( /*#__PURE__*/_jsx(React.StrictMode, {
    children: /*#__PURE__*/_jsx(App, {})
}));