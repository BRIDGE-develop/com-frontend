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
const Nav = (): JSX.Element => (
    <MenuBar>
        <Menu fixed="top" inverted>
            <Container>
                <Menu.Item as={Link} to="/personal">
                    BRIDGE
                </Menu.Item>
                <Menu.Item as={Link} to="/skill">
                    경력서
                </Menu.Item>
                <Menu.Item as={Link} to="/personal">
                    개인정보
                </Menu.Item>
                <Menu.Item as={Link} to="/paycheck">
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
