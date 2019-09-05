import React from 'react';
import { Container, Divider, Header, Icon, Grid, Image, Table, Button } from 'semantic-ui-react';
import { TitleDiv } from '../component/title';
import EditPersonalWork from './editPersonalWork';
import styled from 'styled-components';
import EditPersonalInfo from './editPersonalInfo';

const StyleContainer = styled(Container)`
    texti-align: 'center';
    .buttonCenter {
        text-align: center;
        padding: 12px;
    }
`;

const Persoanl: React.FC = (): JSX.Element => {
    // const personal = '';
    // const [imgUploading, setImgUploading] = useState({ uploading: false, image: '' });

    const props = {
        personal: {
            name: '이진섭',
            birthday: '1990年 03月 25日',
            home: '新宿区　西新宿 3-7-26',
            phone: '080-0000-0000',
        },
        family: {
            familyName: '이서연',
            familyRelation: '동생',
            familyHome: '경기도 부천시',
            familyPhone: '010-0000-0000',
        },
        workplace: {
            place: '月島',
            contract: 'minosys',
            startDate: '2019/04/01' as string,
            endDate: '' as string,
        },
    };

    // const imageUploader = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     let reader = new FileReader();
    //     let file = e.target.files[0];
    //     reader.onloadend = () => {
    //         setImageInfo({
    //         file: file,
    //         imagePreview: reader.result as string,
    //       });
    //     }
    //     reader.readAsDataURL(file)
    // };

    return (
        <StyleContainer style={{ minHeight: '89.6vh' }}>
            <TitleDiv name="Personal" />
            <Divider horizontal>
                <Header as="h3">
                    <Icon name="address book outline" />
                    基本情報
                </Header>
            </Divider>

            <Grid columns={3} padded>
                <Grid.Row>
                    <Grid.Column verticalAlign="middle" width="6">
                        <Header as="h3">個人情報</Header>
                        <Table definition>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell width="3">姓名</Table.Cell>
                                    <Table.Cell width="9">{props.personal.name}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell width="3">生年月日</Table.Cell>
                                    <Table.Cell width="9">{props.personal.birthday}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>住所</Table.Cell>
                                    <Table.Cell>{props.personal.home}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>連絡先</Table.Cell>
                                    <Table.Cell>{props.personal.phone}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle" width="6">
                        <Header as="h3">非常連絡先</Header>
                        <Table definition>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell width="3">姓名</Table.Cell>
                                    <Table.Cell width="9">{props.family.familyName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>家族関係</Table.Cell>
                                    <Table.Cell>{props.family.familyRelation}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>住所</Table.Cell>
                                    <Table.Cell>{props.family.familyHome}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>連絡先</Table.Cell>
                                    <Table.Cell>{props.family.familyPhone}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column textAlign="right" floated="right" width="4">
                        <Image
                            src="https://react.semantic-ui.com/images/wireframe/image.png"
                            size="medium"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div className="buttonCenter">
                <Button.Group>
                    <EditPersonalInfo {...props} />
                    <Button.Or />
                    {/* <Button as="label" htmlFor="upload" onClick={e => imageUploader(e)}> */}
                    <Button as="label" htmlFor="upload">
                        写真変更
                    </Button>
                    <input hidden id="upload" type="file" />
                </Button.Group>
            </div>

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
                                    <Table.Cell width="3">場所</Table.Cell>
                                    <Table.Cell width="9">{props.workplace.place}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>元請会社</Table.Cell>
                                    <Table.Cell>{props.workplace.contract}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>開始日</Table.Cell>
                                    <Table.Cell>{props.workplace.startDate}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>終了希望日</Table.Cell>
                                    <Table.Cell>{props.workplace.endDate || '予定無し'}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div className="buttonCenter">
                <EditPersonalWork {...props} />
            </div>
        </StyleContainer>
    );
};

export default Persoanl;
