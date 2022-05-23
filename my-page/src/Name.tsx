import { PureComponent } from 'react';

export type Props = { name: string };

class Name extends PureComponent<Props> {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default Name;