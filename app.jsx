App = React.createClass({  
  render() {
    return (
      <div>
        <h1>Widget Maker</h1>
        <form>
          <input type="text" name="widgetName" placeholder="Name your new widget..."/>
          <input type="submit" value="Create Widget" />
        </form>
      </div>
    )
  }
})