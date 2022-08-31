import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import ContinentSearch from '../components/ContinentSearch';

describe('Testing ContinentSearch component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <ContinentSearch />
        </Router>
      </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
