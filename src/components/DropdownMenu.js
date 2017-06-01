import React from 'react';
import styled from 'styled-components';

function DropdownMenu(props) {
  return (
    <div className={props.className}>
      <ul className="dropdown">
        {props.data.map(item => {
          const { classNames, icon, altText, title, href } = item;
          return (
            <li key={title} className={classNames}>
              <a href={href}>
                <img src={icon} alt={altText} />
                <span>{title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default styled(DropdownMenu)`
  .dropdown {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.5s;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 170px;
    text-align: left;
    top: 60px;
    right: 0px;
    border: 1px solid #ededee;
    box-shadow: 0px 1px 1px 1px #ededee;
  }

  .dropdown__item {
    cursor: pointer;
    text-align: left;
    line-height: 24px;
    font-size: 14px;
    a {
      margin: 8px 16px;
      text-decoration: none ;
      display: block;
      img {
        margin-right: 12px;
        vertical-align: -24%;
        width: 24px;
      }
      span {
        white-space: nowrap;
        overflow: hidden;
        color: #4a4d55;
      }
    }
  }

  .dropdown__item--large {
    border-bottom: 1px solid #ededee;
    a {
      margin: 16px;
    }
  }
`;
