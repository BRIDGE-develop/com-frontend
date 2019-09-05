import React from 'react';
import { Modal, Button, Icon, Table, Input, Divider, Header } from 'semantic-ui-react';

interface PersonalInfoProps {
    personal: {
        name: string;
        birthday: string;
        home: string;
        phone: string;
    };

    family: {
        familyName: string;
        familyRelation: string;
        familyHome: string;
        familyPhone: string;
    };
}

const EditPersonalInfo: React.FC<PersonalInfoProps> = (props): JSX.Element => {
    return (
        <Modal trigger={<Button color="teal">情報変更</Button>}>
            <Modal.Header>
                <Icon name="address book outline" />
                基本情報 修正
            </Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Header as="h2" textAlign="center">
                        個人情報
                    </Header>
                    <Table definition>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>住所</Table.Cell>
                                <Table.Cell>
                                    <Input
                                        placeholder="住所"
                                        defaultValue={props.personal.home}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>連絡先</Table.Cell>
                                <Table.Cell>
                                    <Input
                                        placeholder="連絡先"
                                        defaultValue={props.personal.phone}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Divider />
                    <Header as="h2" textAlign="center">
                        非常連絡先
                        <Header.Subheader>
                            祝祭日プレゼントを発送などで参考用です。
                        </Header.Subheader>
                    </Header>
                    <Table definition>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>姓名</Table.Cell>
                                <Table.Cell>
                                    <Input
                                        placeholder="姓名"
                                        defaultValue={props.family.familyName}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>家族関係</Table.Cell>
                                <Table.Cell>
                                    <Input
                                        placeholder="家族関係"
                                        defaultValue={props.family.familyRelation}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>住所</Table.Cell>
                                <Table.Cell>
                                    <Input
                                        placeholder="住所"
                                        defaultValue={props.family.familyHome}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>連絡先</Table.Cell>
                                <Table.Cell>
                                    <Input
                                        placeholder="連絡先"
                                        defaultValue={props.family.familyPhone}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="grey">
                    <Icon name="remove" /> 取消
                </Button>
                <Button color="teal">
                    <Icon name="checkmark" /> 修正
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default EditPersonalInfo;
