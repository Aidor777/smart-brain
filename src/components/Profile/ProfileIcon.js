import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            data-toggle="dropdown"
            tag="span"
            aria-expanded
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
              className="br-100 ba h3 w3 dib"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            end
            className="b--transparent shadow-5"
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
