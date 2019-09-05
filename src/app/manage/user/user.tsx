/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import _ from 'lodash';
import React, { Component } from 'react';
import { Table, Container, Header, Button } from 'semantic-ui-react';

type sort = 'ascending' | 'descending';

const tableData = [
    { name: 'John', age: 15, gender: 'Male' },
    { name: 'Amber', age: 40, gender: 'Female' },
    { name: 'Leslie', age: 25, gender: 'Other' },
    { name: 'Ben', age: 70, gender: 'Male' },
];

const style = {
    button: {
        marginBottom: '20px',
    },
    h1: {
        marginTop: '20px',
    },
};

export default class User extends Component {
    state = {
        column: null,
        data: tableData,
        // direction: sort.ascending,
        direction: 'ascending' as sort,
    };

    handleSort = (clickedColumn: string) => (): void => {
        const { column, data, direction } = this.state;

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            });

            return;
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        });
    };

    render(): JSX.Element {
        const { column, data, direction } = this.state;

        return (
            <div>
                <Header
                    as="h1"
                    content="Responsive UI Examples"
                    textAlign="center"
                    style={style.h1}
                />

                <Container>
                    <Button floated="right" style={style.button}>
                        사원추가
                    </Button>
                    <Table sortable celled striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                    sorted={column === 'name' ? direction : undefined}
                                    onClick={this.handleSort('name')}
                                >
                                    Name
                                </Table.HeaderCell>
                                <Table.HeaderCell
                                    sorted={column === 'age' ? direction : undefined}
                                    onClick={this.handleSort('age')}
                                >
                                    Age
                                </Table.HeaderCell>
                                <Table.HeaderCell
                                    sorted={column === 'gender' ? direction : undefined}
                                    onClick={this.handleSort('gender')}
                                >
                                    Gender
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {_.map(
                                data,
                                ({ age, gender, name }): JSX.Element => (
                                    <Table.Row key={name}>
                                        <Table.Cell>{name}</Table.Cell>
                                        <Table.Cell>{age}</Table.Cell>
                                        <Table.Cell>{gender}</Table.Cell>
                                    </Table.Row>
                                )
                            )}
                        </Table.Body>
                    </Table>
                </Container>
            </div>
        );
    }
}
