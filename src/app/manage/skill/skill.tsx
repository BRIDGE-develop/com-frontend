import React, { Component } from 'react';
import {
    Container,
    Grid,
    Divider,
    Header,
    Icon,
    List,
    Table,
    SemanticICONS,
} from 'semantic-ui-react';
import styled from 'styled-components';
import { TitleDiv } from '../../component/title';
import { DetailDesc } from './detail';
import ProgressBar from '../../component/progress';
import RatingStar from '../../component/rating';
import EditPersonal from './EditPersonal';
import EditCareer from './EditCareer';

const StyleContainer = styled(Container)`
    texti-align: 'center';
    .buttonCenter {
        text-align: center;
    }
`;

class Skill extends Component {
    state = {
        value: null,
        personals: [
            { item: 'other gender', value: '男性' },
            { item: 'birthday', value: '1990年 03年（29才）' },
            { item: 'home', value: '新宿区　西新宿' },
            { item: 'subway', value: '大江戸線　都庁前' },
            { item: 'flag', value: '韓国' },
        ],
        skills: [
            { sname: 'C#', career: 3 },
            { sname: 'Angular', career: 1 },
            { sname: 'React', career: 1 },
            { sname: 'SQL Developer', career: 2 },
        ],
        career: 3,
        japaneses: [
            { subject: '会話', rate: 3, maxRate: 5 },
            { subject: '漢字', rate: 3, maxRate: 5 },
            { subject: '作文', rate: 3, maxRate: 5 },
        ],
        languages: [
            { subject: '英吾', rate: 3, maxRate: 5 },
            { subject: '中国語', rate: 3, maxRate: 5 },
        ],
        otherSkills: [
            { sname: '言語', career: 'Java、Javascript、HTML' },
            { sname: 'DB', career: 'MySQL、PostgresSQL、HiRDB、DB2、Cassandra' },
            { sname: 'OS', career: 'Windows、Linux(CentOS、Ubuntu)、MacOS' },
            { sname: 'Editor', career: 'Eclipse、VS Code' },
            { sname: 'その他', career: 'CSS、jQuery、Ajax、XML' },
        ],
    };

    render() {
        const { personals, skills, career, japaneses, languages, otherSkills } = this.state;

        return (
            <StyleContainer>
                <TitleDiv name="Skill Sheet"></TitleDiv>
                <Divider horizontal>
                    <Header as="h3">
                        <Icon name="address book outline" />
                        基本情報
                    </Header>
                </Divider>

                <Grid columns={3} divided padded>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h2">
                                リジンソプ
                                <Header.Subheader>Lee Jinseop</Header.Subheader>
                            </Header>
                            <Header as="h4">
                                <List>
                                    {personals.map((personal, index) => (
                                        <List.Item key={index}>
                                            <List.Icon name={personal.item as SemanticICONS} />
                                            <List.Content>{personal.value}</List.Content>
                                        </List.Item>
                                    ))}
                                </List>
                            </Header>

                            <Header as="h4">
                                <Icon name="certificate" />
                                <Header.Content>資格情報</Header.Content>
                            </Header>
                            <List>
                                <List.Item>情報処理技師 1級</List.Item>
                                <List.Item>TOEIC 835点</List.Item>
                                <List.Item>TOEIC SPEAKING 130点</List.Item>
                                <List.Item>日本語能力試験 2級</List.Item>
                            </List>

                            <Header as="h4">
                                <Icon name="book" />
                                <Header.Content>最終学歴</Header.Content>
                            </Header>
                            <List>
                                <List.Item>（韓国）嘉泉大学卒都市 行政学</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4">
                                <Icon name="language" />
                                <Header.Content>言語能力</Header.Content>
                            </Header>
                            <Table basic="very" celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan="2">日本語</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                {japaneses.map((japanese, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell width="4">{japanese.subject}</Table.Cell>
                                        <Table.Cell>
                                            <RatingStar
                                                defaultRating={japanese.rate}
                                                key={index}
                                                maxRate={japanese.maxRate}
                                                disabled
                                            ></RatingStar>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table>

                            <Table basic="very" celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan="2">その他</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                {languages.map((language, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell width="4">{language.subject}</Table.Cell>
                                        <Table.Cell>
                                            <RatingStar
                                                defaultRating={language.rate}
                                                key={index}
                                                maxRate={language.maxRate}
                                                disabled
                                            ></RatingStar>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4">
                                <Icon name="tag" />
                                <Header.Content>主要技術</Header.Content>
                            </Header>
                            {skills.map((skill, index) => (
                                <ProgressBar
                                    size="small"
                                    name={skill.sname}
                                    number={(skill.career * 100) / career}
                                    key={index}
                                />
                            ))}

                            <Header as="h4">
                                <Icon name="tag" />
                                <Header.Content>経験技術</Header.Content>
                            </Header>
                            <Table basic="very" celled>
                                {otherSkills.map((otherSkill, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{otherSkill.sname}</Table.Cell>
                                        <Table.Cell>{otherSkill.career}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <div className="buttonCenter">
                    <EditPersonal states={this.state} />
                </div>

                <Divider horizontal>
                    <Header as="h3">
                        <Icon name="chart bar" />
                        経歴
                    </Header>
                </Divider>
                <DetailDesc />

                <div className="buttonCenter">
                    <EditCareer />
                </div>
            </StyleContainer>
        );
    }
}

export default Skill;
