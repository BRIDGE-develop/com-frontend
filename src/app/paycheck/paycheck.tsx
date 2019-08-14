import React, { useState, useEffect } from 'react';
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
} from 'semantic-ui-react';
import { TitleDiv } from '../component/title';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const StyledContainer = styled.div`
    padding-top: 20px;
`;

const Paycheck = () => {
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

    const [date, setDate] = useState('19年08月分');
    const [salary, setSalary] = useState(0);

    useEffect(() => {
        const _salary = items.filter(item => item.iDate === date)[0].iSalary;
        setSalary(_salary);
    });

    return (
        <Container>
            <TitleDiv name="Paycheck" />
            <StyledContainer>
                <Grid relaxed>
                    <Grid.Column width={4}>
                        <Button color="teal">新規作成</Button>
                        <Menu pointing secondary vertical>
                            {items.map((item, index) => (
                                <Menu.Item
                                    name={item.iDate}
                                    salary={item.iSalary}
                                    // active={date}
                                    onClick={() => setDate(item.iDate)}
                                    key={index}
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
                                    subheader={date}
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
                                            value={salary}
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
                                            value={salary}
                                        />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={salary}
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
                                            value={salary * 0.11}
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
                                            value={salary * 0.11}
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
                                            value={salary * 0.89}
                                        />
                                    </Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell>
                                        <NumberFormat
                                            thousandSeparator={true}
                                            prefix={'¥'}
                                            displayType="text"
                                            value={salary * 0.89}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <Input
                            labelPosition="right"
                            type="text"
                            placeholder={salary}
                            onChange={e => setSalary((e.target.value as unknown) as number)}
                        >
                            <Label basic>$</Label>
                            <input />
                        </Input>
                        <Button color="orange">修正</Button>
                    </Grid.Column>
                </Grid>
            </StyledContainer>
        </Container>
    );
};

export default Paycheck;
