import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface Props {
  compiler: String
  framework: String
}
export class HelloComponent extends React.Component<Props, {}> {
  handleClick() {
  }
  add(x: number, y: number): number {
    return x+y
  }
  buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(' ')
  }
  render() {
    return (
      <input type="text" ref="myTextInput"/>,
      <button onClick={this.handleClick}>Hello from {this.props.compiler} and {this.props.framework}! {this.add(4, 5)}　- {this.buildName("Joseph", "Samuel", "Lucas", "MacKinzie")}</button>
      );
  }
}
