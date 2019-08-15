import React, { useState } from 'react';
import {
    Menu,
    Grid,
    Container,
    Table,
    Header,
    List,
    Image,
    Button,
    Input,
    Label,
    Segment,
    MenuItemProps,
    Form,
    DropdownProps,
} from 'semantic-ui-react';
import { TitleDiv } from '../component/title';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const StyledContainer = styled.div`
    padding-top: 20px;
`;

const year = [
    { key: '2019', text: '2019', value: '2019' },
    { key: '2020', text: '2020', value: '2020' },
    { key: '2021', text: '2021', value: '2021' },
    { key: '2022', text: '2022', value: '2022' },
    { key: '2023', text: '2023', value: '2023' },
];

const month = [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
    { key: '6', text: '6', value: '6' },
    { key: '7', text: '7', value: '7' },
    { key: '8', text: '8', value: '8' },
    { key: '9', text: '9', value: '9' },
    { key: '10', text: '10', value: '10' },
    { key: '11', text: '11', value: '11' },
    { key: '12', text: '12', value: '12' },
];

const Paycheck: React.FC = () => {
    const userName = '李振燮';
    const items = [
        { iDate: '19年08月分', iSalary: 720000 },
        { iDate: '19年07月分', iSalary: 620000 },
        { iDate: '19年06月分', iSalary: 520000 },
        { iDate: '19年05月分', iSalary: 420000 },
        { iDate: '19年04月分', iSalary: 320000 },
        { iDate: '19年03月分', iSalary: 700000 },
        { iDate: '19年02月分', iSalary: 600000 },
        { iDate: '19年01月分', iSalary: 70000 },
    ];

    const [values, setValues] = useState({
        date: items[0].iDate,
        salary: items[0].iSalary,
        addMode: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues(values => ({ ...values, [name]: value }));
    };

    const clickChangeMonth = (e: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
        setValues(_ => ({ date: data.name as string, salary: data.salary, addMode: false }));
    };

    const clickChangeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
        setValues({ date: '' as string, salary: 0, addMode: true });
    };

    const changeDropdown = (e: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
        const { name, value } = data;
        setValues(values => ({ ...values, [name]: value }));
    };

    return (
        <Container>
            <TitleDiv name="Paycheck" />
            <StyledContainer>
                <Grid relaxed>
                    <Grid.Column width={4}>
                        <Button color="teal" onClick={clickChangeMode}>
                            新規作成
                        </Button>
                        <Menu pointing secondary vertical>
                            {items.map((item, index) => (
                                <Menu.Item
                                    name={item.iDate}
                                    salary={item.iSalary || 0}
                                    active={values.date === item.iDate || false}
                                    onClick={clickChangeMonth}
                                    key={index}
                                    value="date"
                                />
                            ))}
                        </Menu>
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <Grid columns={4}>
                            <Grid.Column>
                                <Table collapsing textAlign="center" celled compact="very">
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Header size="small">
                                                    検<br />印
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Image
                                                    src={require('../../asset/stamp.png')}
                                                    size="tiny"
                                                />
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Column>

                            <Grid.Column width={8} textAlign="center" verticalAlign="middle">
                                <Header
                                    size="huge"
                                    content="給料支給明細書"
                                    subheader={values.date}
                                ></Header>
                            </Grid.Column>
                            <Grid.Column verticalAlign="middle" textAlign="right">
                                <List>
                                    <List.Item>
                                        <Header size="small">株式会社 ブリッジ</Header>
                                    </List.Item>
                                    <List.Item>
                                        <Header size="medium">
                                            {userName}
                                            {'　様'}
                                        </Header>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                        </Grid>

                        {/* 給料 */}
                        <Table celled fixed compact="very">
                            <Table.Body>
                                <Table.Row textAlign="center" warning>
                                    <Table.Cell rowSpan="4" width="1" active>
                                        給料
                                    </Table.Cell>
                                    <Table.Cell>業務委託料</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={values.salary}
                                        />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="center" warning>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>支給合計</Table.Cell>
                                    <Table.Cell>課税対象額</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={values.salary}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={values.salary}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        {/* 控除 */}
                        <Table celled fixed compact="very">
                            <Table.Body>
                                <Table.Row textAlign="center" warning>
                                    <Table.Cell rowSpan="6" width="1" active>
                                        控除
                                    </Table.Cell>
                                    <Table.Cell>健康保険</Table.Cell>
                                    <Table.Cell>介護保険</Table.Cell>
                                    <Table.Cell>厚生年金</Table.Cell>
                                    <Table.Cell>雇用保険</Table.Cell>
                                    <Table.Cell>社会保険計</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <span>&nbsp;&nbsp;</span>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="center" warning>
                                    <Table.Cell>所得税</Table.Cell>
                                    <Table.Cell>住民税</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={values.salary * 0.11}
                                        />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="center" warning>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>控除合計</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={values.salary * 0.11}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>

                        {/* 勤怠 */}
                        <Table celled fixed compact="very">
                            <Table.Body>
                                <Table.Row textAlign="center" warning>
                                    <Table.Cell rowSpan="4" width="1" active>
                                        勤怠
                                    </Table.Cell>
                                    <Table.Cell>出勤日数</Table.Cell>
                                    <Table.Cell>有給日数</Table.Cell>
                                    <Table.Cell>欠勤日数</Table.Cell>
                                    <Table.Cell>出勤時間</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <span>&nbsp;&nbsp;</span>
                                    </Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="center" warning>
                                    <Table.Cell>残業時間</Table.Cell>
                                    <Table.Cell>休出日数</Table.Cell>
                                    <Table.Cell>休出時間</Table.Cell>
                                    <Table.Cell>深夜残業</Table.Cell>
                                    <Table.Cell>遅早回数</Table.Cell>
                                    <Table.Cell>遅早時間</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell>
                                        <span>&nbsp;&nbsp;</span>
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="center" warning>
                                    <Table.Cell rowSpan="2" active>
                                        記録
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>振込支給額</Table.Cell>
                                    <Table.Cell>現金支給額</Table.Cell>
                                    <Table.Cell>差引支給額</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign="right">
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={values.salary * 0.89}
                                        />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={values.salary * 0.89}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        {!values.addMode ? (
                            <Segment color="orange" textAlign="center">
                                <Header content="給料修正" />
                                <Input
                                    labelPosition="right"
                                    type="text"
                                    placeholder={values.salary}
                                >
                                    <Label basic>$</Label>
                                    <input onChange={handleChange} name="salary" />
                                </Input>
                                <Button color="orange">修正</Button>
                            </Segment>
                        ) : (
                            <Segment color="teal" textAlign="center">
                                <Header content="給料作成" />
                                <Form unstackable>
                                    <Form.Group inline widths="12">
                                        <Form.Select
                                            compact
                                            name="year"
                                            placeholder="2019"
                                            label="年"
                                            options={year}
                                            onChange={changeDropdown}
                                        />
                                        <Form.Select
                                            compact
                                            name="month"
                                            placeholder="8"
                                            label="月"
                                            options={month}
                                        />
                                        <Form.Input
                                            labelPosition="right"
                                            type="text"
                                            placeholder={0}
                                        >
                                            <Label basic>¥</Label>
                                            <Input onChange={handleChange} name="salary" />
                                        </Form.Input>
                                        <Form.Button color="teal">作成</Form.Button>
                                    </Form.Group>
                                </Form>
                            </Segment>
                        )}
                    </Grid.Column>
                </Grid>
            </StyledContainer>
        </Container>
    );
};

export default Paycheck;
