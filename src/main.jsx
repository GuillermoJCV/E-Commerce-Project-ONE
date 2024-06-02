import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from "./contexts/ThemeContext.jsx"
import './styles/root.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Theme>
        <App />
    </Theme>,
)