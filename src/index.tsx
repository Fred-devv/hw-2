import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import MultiDropdown from './components/MultiDropdown';
import Input from './components/Input';
import ArrowDownIcon from './components/icons/ArrowDownIcon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<Input
  value="Кто такой биткоин?"
  onChange={(value: string) => console.log(value)}
  afterSlot={<ArrowDownIcon color="secondary" />}
/>
  </React.StrictMode>
);
