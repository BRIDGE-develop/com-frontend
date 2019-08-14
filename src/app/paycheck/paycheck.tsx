import React, { Component } from 'react';
import {
    Menu,
    MenuItemProps,
    Grid,
    Container,
    Table,
    Header,
    List,
    Image,
} from 'semantic-ui-react';
import { TitleDiv } from '../component/title';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const StyledContainer = styled.div`
    padding-top: 20px;
`;

export default class Paycheck extends Component {
    state = {
        activeItem: '19年07月分',
        userName: '李振燮',
        paycheck: {
            entrustment: 720000,
        },
        // deduction: {
        //     healthInsurance: 0, //健康保険
        //     nursingCare: 0, //介護保険
        //     welfare: 0, //厚生年金
        //     employmentInsurance: 0, //雇用保険
        //     socialInsurance: 0, //社会保険計
        //     incomeTax: 0, //所得税
        //     residentTax: 0, //住民税
        // },
        // work: {
        //     workingDays: 0, //出勤日数
        //     paidDays: 0, //有給日数
        //     absence: 0, //欠勤日数
        //     officeHours: 0, //出勤時間
        //     overtime: 0, //残業時間
        //     daysOff: 0, //休出日数
        //     timeOff: 0, //休出時間
        //     lateNightOvertime: 0, //深夜残業
        //     earlyAndLateTimes: 0, //遅早回数
        //     lateHour: 0, //遅早時間
        // },
    };

    handleItemClick = (e, { name }: MenuItemProps) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Container>
                <TitleDiv name="Paycheck" />
                <StyledContainer>
                    <Grid>
                        <Grid.Column width={4}>
                            <Menu pointing secondary vertical>
                                <Menu.Item
                                    name="19年08月分"
                                    active={activeItem === '19年08月分'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="19年07月分"
                                    active={activeItem === '19年07月分'}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="19年06月分"
                                    active={activeItem === '19年06月分'}
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                        </Grid.Column>

                        <Grid.Column stretched width={12}>
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
                                        subheader={activeItem}
                                    ></Header>
                                </Grid.Column>
                                <Grid.Column verticalAlign="middle" textAlign="right">
                                    <List>
                                        <List.Item>
                                            <Header size="small">株式会社 ブリッジ</Header>
                                        </List.Item>
                                        <List.Item>
                                            <Header size="medium">
                                                {this.state.userName}
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
                                                value={this.state.paycheck.entrustment}
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
                                                value={this.state.paycheck.entrustment}
                                            />
                                        </Table.Cell>
                                        <Table.Cell>
                                            <NumberFormat
                                                thousandSeparator={true}
                                                prefix={'¥'}
                                                displayType="text"
                                                value={this.state.paycheck.entrustment}
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
                                                value={this.state.paycheck.entrustment * 0.11}
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
                                                value={this.state.paycheck.entrustment * 0.11}
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
                                                value={this.state.paycheck.entrustment * 0.89}
                                            />
                                        </Table.Cell>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell>
                                            <NumberFormat
                                                thousandSeparator={true}
                                                prefix={'¥'}
                                                displayType="text"
                                                value={this.state.paycheck.entrustment * 0.89}
                                            />
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid>
                </StyledContainer>
            </Container>
        );
    }
}
