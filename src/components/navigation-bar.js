import React from 'react';

// The NavigationBar component goes here.  It should be the default export.
export default function NavigationBar(props) {

  const links = props.links.map((link, index) => {
      return  <li key={index}>
                <a href={link.href}>
                  {link.text}
                </a>
              </li>
  });

  return (
    <div className="header-bar">
      <h1>{props.title}</h1>
      <nav className="header-bar-nav">
        <ul>{links}</ul>
      </nav>
    </div>
  );
}

NavigationBar.defaultProps = {
  title: '',
  links: [
    {
      text: '',
      href: ''
    }
  ]
}
