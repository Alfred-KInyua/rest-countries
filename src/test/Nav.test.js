import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Access/Nav';

describe('Testing Nav component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
