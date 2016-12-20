class Main extends React.Component {
  render() {
    return <Provider color="red">
        <App/>
    </Provider>;
  }
}
...
@inject("color")
class Paper extends React.Component {
  render() {
    return
      <div style={{backgroundColor: this.props.color}}>
        the selected color is ${this.props.color}
      </div>
  }
}