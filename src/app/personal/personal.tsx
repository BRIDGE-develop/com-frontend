import React, { useState } from 'react';
import {
    Container,
    Divider,
    Header,
    Icon,
    Grid,
    Input,
    Image,
    Button,
    List,
    SemanticICONS,
    Table,
    Dropdown,
    Menu,
} from 'semantic-ui-react';
import { TitleDiv } from '../component/title';

const Persoanl: React.FC = () => {
    // const personal = '';
    // const [imgUploading, setImgUploading] = useState({ uploading: false, image: '' });

    const options = [
        { key: 0, text: '無し', value: 0 },
        { key: 1, text: '1ヶ月後', value: 1 },
        { key: 2, text: '2ヶ月後', value: 2 },
        { key: 3, text: '3ヶ月後', value: 3 },
        { key: 4, text: '4ヶ月後', value: 4 },
    ];

    const personals = [
        { item: 'other gender', value: '男性' },
        { item: 'birthday', value: '1990年 03月 25日（29才）' },
        { item: 'home', value: '新宿区　西新宿 3-7-26' },
        { item: 'phone', value: '080-0000-0000' },
    ];

    const workplace = {
        place: '月島',
        contract: 'minosys',
        startDate: '',
        endDate: ('' as unknown) as Date,
    };

    const [endDate, setEndDate] = useState(('' as unknown) as Date);

    const currentDate = new Date();

    const setDropEndDate = (e, props) => {
        currentDate.setMonth(currentDate.getMonth() + props.value);
        setEndDate(currentDate);
    };

    return (
        <Container>
            <TitleDiv name="Personal" />
            <Divider horizontal>
                <Header as="h3">
                    <Icon name="address book outline" />
                    基本情報
                </Header>
            </Divider>

            <Grid columns={2} padded textAlign="justified">
                <Grid.Row>
                    <Grid.Column verticalAlign="middle" width="8">
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
                    </Grid.Column>
                    <Grid.Column textAlign="right" floated="right" width="4">
                        <Image
                            src="https://react.semantic-ui.com/images/wireframe/image.png"
                            size="medium"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Divider horizontal>
                <Header as="h3">
                    <Icon name="briefcase" />
                    現場情報
                </Header>
            </Divider>

            <Grid padded>
                <Grid.Row>
                    <Grid.Column verticalAlign="middle">
                        <Table definition>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>場所</Table.Cell>
                                    <Table.Cell>{workplace.place}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>元請会社</Table.Cell>
                                    <Table.Cell>{workplace.contract}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>開始日</Table.Cell>
                                    <Table.Cell>{workplace.startDate}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>終了希望日</Table.Cell>
                                    <Table.Cell>
                                        {workplace.endDate || '予定無し'}
                                        <span />
                                        <Dropdown
                                            placeholder="Dropdown"
                                            options={options}
                                            selection
                                            item
                                            onChange={setDropEndDate}
                                        />
                                        <Button color="teal">設定</Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Persoanl;
