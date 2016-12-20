let appState = observable({
    timer: 0
})

setInterval(() => {
    appState.timer += 1
}, 1000)
        
let TimerView = observer((props)=>
    return <span>Seconds passed: {props.appState.timer}</span>
)

React.render(<TimerView appState={appState} />, document.body)