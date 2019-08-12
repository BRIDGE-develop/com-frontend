import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const StyleLeftSideBar = styled(Menu)`
    vertical-align: middle;
    > img {
        borderradius: 50%;
        maxwidth: 10rem;
        maxheight: 10rem;
        border: 0.5rem solid rgba(255, 255, 255, 0.2);
        alt: 'txt';
    }
`;

const style = {
    Menu: {
        zIndex: '100',
        width: '240px',
        textAlign: '-webkit-center',
        flexDirection: 'column',
        backgroundColor: 'rgb(47,65,79)',
    },
    img: {
        borderRadius: '50%',
        maxWidth: '10rem',
        maxHeight: '10rem',
        border: '.5rem solid rgba(255,255,255,.2)',
    },
};

export default class SideBar extends Component {
    state = { activeItem: 'account' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <StyleLeftSideBar>
                <Menu secondary vertical fixed="left" inverted style={style.Menu}>
                    <Menu.Item>
                        <img src="https://menhairstylesworld.com/wp-content/uploads/2017/03/Sleek-Hairstyles-for-Men-with-Thick-Hair.jpg" />
                    </Menu.Item>
                    <Menu.Item name="settings" active={activeItem === 'settings'} />
                </Menu>
            </StyleLeftSideBar>
        );
    }
}
