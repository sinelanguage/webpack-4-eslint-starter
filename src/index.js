import './style/style.css';
// uses style-loader and adds style tag to the top of the index.html because we
// are using a url import style from "./style/style.css"; uses style-loader and
// inlines the style

console.log('Hello world');

function foo() {
  const element = document.createElement('h1');
  element.innerHTML = 'Hello Webpack';
  element.classList.add('foo');
  return element;
}

document.body.appendChild(foo());
