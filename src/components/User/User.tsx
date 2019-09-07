/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import _ from 'lodash';
import React, { useState } from 'react';
import { Table, Container, Button, Icon } from 'semantic-ui-react';
import { TitleDiv } from '../../app/component/title';
import { Link } from 'react-router-dom';

type sort = 'ascending' | 'descending';

interface TableDataIf {
    name: string;
    age: number;
    gender: string;
    birth: string;
    joinDate: string;
    workStatus: boolean;
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
        {
            name: 'John',
            age: 15,
            gender: 'Male',
            birth: '2019/09/03',
            joinDate: '2019/09/03',
            workStatus: true,
        },
        {
            name: 'Amber',
            age: 40,
            gender: 'Female',
            birth: '2019/09/03',
            joinDate: '2019/09/03',
            workStatus: true,
        },
        {
            name: 'Leslie',
            age: 25,
            gender: 'Other',
            birth: '2019/09/03',
            joinDate: '2019/09/03',
            workStatus: true,
        },
        {
            name: 'Ben',
            age: 70,
            gender: 'Male',
            birth: '2019/09/03',
            joinDate: '2019/09/03',
            workStatus: false,
        },
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
                            sorted={values.column === 'name' ? direction : undefined}
                            onClick={handleSort}
                            value="name"
                            textAlign="center"
                        >
                            名前
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={values.column === 'gender' ? direction : undefined}
                            onClick={handleSort}
                            value="gender"
                            textAlign="center"
                        >
                            性別
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={values.column === 'birth' ? direction : undefined}
                            onClick={handleSort}
                            value="birth"
                            textAlign="center"
                        >
                            生年月日
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={values.column === 'age' ? direction : undefined}
                            onClick={handleSort}
                            value="age"
                            textAlign="center"
                        >
                            歳
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={values.column === 'joinDate' ? direction : undefined}
                            onClick={handleSort}
                            value="joinDate"
                            textAlign="center"
                        >
                            入社日
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={values.column === 'workStatus' ? direction : undefined}
                            onClick={handleSort}
                            value="workStatus"
                            textAlign="center"
                        >
                            稼動情報
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">詳細</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(values.data, ({ age, gender, name, birth, joinDate, workStatus }) => (
                        <Table.Row key={name}>
                            <Table.Cell textAlign="center">{name}</Table.Cell>
                            <Table.Cell textAlign="center">{age}</Table.Cell>
                            <Table.Cell textAlign="center">{gender}</Table.Cell>
                            <Table.Cell textAlign="center">{birth}</Table.Cell>
                            <Table.Cell textAlign="center">{joinDate}</Table.Cell>
                            <Table.Cell textAlign="center">
                                {workStatus ? (
                                    <Icon name="check" color="teal" />
                                ) : (
                                    <Icon name="x" color="red" />
                                )}
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                                <Button color="teal" content="詳細" />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>
    );
};

export default User;
