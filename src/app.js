// You can add a list of files
function importAll(r) {
   return r.keys().map(r);
}
importAll(require.context('./static/img', false, /\.(png|jpe?g|svg)$/));

// ... or, add files individually
import './vendors/normalize/normalize.css';
import './styles/main.css';
import './styles/header.css';
import './styles/first-section.css';
import './styles/second-section.css';
import './styles/third-section.css';
import './styles/footer.css';
