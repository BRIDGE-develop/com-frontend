/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import _ from 'lodash';
import React, { useState } from 'react';
import { Table, Container, Button } from 'semantic-ui-react';
import { TitleDiv } from '../../app/component/title';
import { Link } from 'react-router-dom';

type sort = 'ascending' | 'descending';

interface TableDataIf {
    name: string;
    age: number;
    gender: string;
}

interface Values {
    data: TableDataIf[];
    column: string | null;
    direction: 'ascending' | 'descending';
}

const style = {
    button: {
        marginBottom: '20px',
        marginTop: '14px',
    },
    h1: {
        marginTop: '20px',
    },
};

const User: React.FC = (): JSX.Element => {
    const tableData: TableDataIf[] = [
        { name: 'John', age: 15, gender: 'Male' },
        { name: 'Amber', age: 40, gender: 'Female' },
        { name: 'Leslie', age: 25, gender: 'Other' },
        { name: 'Ben', age: 70, gender: 'Male' },
    ];

    const column = null;
    const direction = 'ascending';

    const [values, setValues] = useState<Values>({
        column: 'name',
        data: tableData,
        direction: 'ascending',
    });

    const handleSort = (e: React.MouseEvent<HTMLElement>) => {
        if (e) e.preventDefault();
        let colm = e.currentTarget.innerText.toLowerCase();

        if (column !== colm) {
            setValues({
                ...values,
                column: colm,
                data: _.sortBy(tableData, [colm as string]),
                direction: 'ascending',
            });
            return;
        }
        setValues({
            ...values,
            direction: direction === 'ascending' ? 'descending' : 'ascending',
            data: values.data.reverse(),
        });
    };

    return (
        <Container style={{ minHeight: '89.6vh' }}>
            <TitleDiv name="User Manage" />
            <Link to="/useradd">
                <Button floated="right" style={style.button}>
                    사원추가
                </Button>
            </Link>
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : undefined}
                            onClick={handleSort}
                            value="name"
                        >
                            Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'age' ? direction : undefined}
                            onClick={handleSort}
                            value="age"
                        >
                            Age
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'gender' ? direction : undefined}
                            onClick={handleSort}
                            value="gender"
                        >
                            Gender
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(values.data, ({ age, gender, name }) => (
                        <Table.Row key={name}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{age}</Table.Cell>
                            <Table.Cell>{gender}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>
    );
};

export default User;
