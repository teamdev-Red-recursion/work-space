import { Home } from './routes/home';
import { CreateCard  } from './routes/create_card';
import { Contact } from './routes/contact';
import { NotMatch } from './routes/not_match';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      {/*各pathにアクセスするとそのpathのelement(routes下にあるページコンポーネント)を表示する*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_card" element={<CreateCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
};
