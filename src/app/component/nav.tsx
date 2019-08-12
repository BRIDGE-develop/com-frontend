import React from 'react';
import { Container, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBar = styled(Menu)`
    &&& {
        z-index: 9999;
        height: 40px;
    }
`;
const Nav = () => (
    <MenuBar>
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item as={Link} to="/dashboard">
                    BRIDGE
                </Menu.Item>
                <Menu.Item as={Link} to="/skill">
                    경력서
                </Menu.Item>
                <Menu.Item as={Link} to="a">
                    안건
                </Menu.Item>
                <Menu.Item as={Link} to="a">
                    급여명세서
                </Menu.Item>
                <Menu.Item as={Link} to="a">
                    공지사항
                </Menu.Item>

                <Dropdown item simple text="관리">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/user">
                            사원관리
                        </Dropdown.Item>
                        <Dropdown.Item>카테고리관리</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Menu>
    </MenuBar>
);

export default Nav;
