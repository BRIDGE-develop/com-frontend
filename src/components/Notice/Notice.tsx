import React from 'react';
import { Table, Container, Button } from 'semantic-ui-react';
import { TitleDiv } from '../../app/component/title';
import { Link } from 'react-router-dom';

const Notice: React.FC = (): JSX.Element => {
    return (
        <Container style={{ minHeight: '89.6vh' }}>
            <TitleDiv name="Notice" />
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="1" textAlign="center">
                            No
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Title</Table.HeaderCell>
                        <Table.HeaderCell width="2" textAlign="center">
                            Date
                        </Table.HeaderCell>
                        <Table.HeaderCell width="2" textAlign="center">
                            Delete
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell textAlign="center">1</Table.Cell>
                        <Table.Cell>
                            <Link to="/noticedetail">제목</Link>
                        </Table.Cell>
                        <Table.Cell textAlign="center">2019/09/03</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button color="red">削除</Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row style={{ textAlign: 'center' }}>
                        <Table.HeaderCell colSpan="4">
                            <Link to="/noticewrite">
                                <Button color="teal">作成</Button>
                            </Link>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Container>
    );
};

export default Notice;
