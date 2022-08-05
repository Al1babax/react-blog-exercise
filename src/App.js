import Nav from './components/nav';
import Layout from './components/layout';
import data from './data';

function App() {
  let dataArray = data
  return (
    <div className='bg-slate-200 w-full h-full'>
      <Nav />
      <Layout
        {...dataArray}
      />
    </div>
  );
}

export default App;
