import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

function createListItems(items, parentRef) {
  return items.map((item, idx) => {

    const handleClick = e => {
      // unmark previous selected items
      const selectedItems = document.querySelectorAll('.navigation .list-item.selected');

      for (let selectedItem of selectedItems) {
        selectedItem.classList.remove('selected');
      }

      // mark current item as selected (including parent item)
      e.currentTarget.querySelector('.list-item').classList.add('selected');

      if (parentRef) {
        parentRef.current.querySelector('.list-item').classList.add('selected');
      }

      e.stopPropagation();
    };

    const ListItem = React.forwardRef((props, ref) => (
        <li ref={ref} onClick={handleClick}>
          <Link to={item.to}>
            <div className="list-item">
              { item.icon ?
                <div className="icon">
                  {item.icon}
                </div>
              : null }
              <div className="header">
                {item.header}
              </div>
            </div>
          </Link>

          {props.children}
      </li>
    ));

    const ref = React.createRef();

    const listItem = (
      <ListItem key={idx} ref={ref} >
        { item.items ?
          <ul>
            { createListItems(item.items, ref) }
          </ul>
        : null }
      </ListItem>
    );

    return listItem;
  });
}

function Navigation({ items = [] }) {

  return (
    <div className="navigation">
      <ul>
        { createListItems(items) }
      </ul>
    </div>
  );

}

export default Navigation;
