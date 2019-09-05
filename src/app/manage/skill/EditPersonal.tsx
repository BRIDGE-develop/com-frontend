import React from 'react';
import { Button, Modal, Icon, Tab, Form, Table, Input } from 'semantic-ui-react';
import RatingStar from '../../component/rating';

const panes = [
    { menuItem: '個人情報', render: (): JSX.Element => <Tab1 /> },
    { menuItem: '言語能力', render: (props): JSX.Element => <Tab2 {...props} /> },
    { menuItem: '技術能力', render: (props): JSX.Element => <Tab3 {...props} /> },
];

const Tab1 = (): JSX.Element => (
    <Tab.Pane>
        <Form>
            <Form.Group widths="equal">
                <Form.Field label="An HTML <input>" control="input" />
                <Form.Field label="An HTML <input>" control="input" />
                <Form.Field label="An HTML <select>" control="select">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Form.Field>
            </Form.Group>
            <Form.Group grouped>
                <label>HTML radios</label>
                <Form.Field label="This one" control="input" type="radio" name="htmlRadios" />
                <Form.Field label="That one" control="input" type="radio" name="htmlRadios" />
            </Form.Group>
        </Form>
    </Tab.Pane>
);

const Tab2 = (props): JSX.Element => (
    <Tab.Pane>
        <Table basic="very" celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan="2">日本語</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {props.states.japaneses.map(
                (japanese, index): JSX.Element => (
                    <Table.Row key={index}>
                        <Table.Cell width="2">{japanese.subject}</Table.Cell>
                        <Table.Cell>
                            <RatingStar
                                defaultRating={japanese.rate}
                                key={index}
                                maxRate={japanese.maxRate}
                            ></RatingStar>
                        </Table.Cell>
                    </Table.Row>
                )
            )}
        </Table>

        <Table basic="very" celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan="2">その他</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            {props.states.languages.map(
                (language, index): JSX.Element => (
                    <Table.Row key={index}>
                        <Table.Cell width="2">{language.subject}</Table.Cell>
                        <Table.Cell>
                            <RatingStar
                                defaultRating={language.rate}
                                key={index}
                                maxRate={language.maxRate}
                            ></RatingStar>
                        </Table.Cell>
                    </Table.Row>
                )
            )}
        </Table>
    </Tab.Pane>
);

const Tab3 = (props): JSX.Element => (
    <Tab.Pane>
        <Table basic="very" celled>
            {props.states.otherSkills.map(
                (otherSkill, index): JSX.Element => (
                    <Table.Row key={index}>
                        <Table.Cell width="1">{otherSkill.sname}</Table.Cell>
                        <Table.Cell>
                            <Input fluid defaultValue={otherSkill.career} />
                        </Table.Cell>
                    </Table.Row>
                )
            )}
        </Table>
    </Tab.Pane>
);

const EditPersonal = (props): JSX.Element => {
    return (
        <Modal trigger={<Button color="teal">変更</Button>}>
            <Modal.Header>
                <Icon name="write" />
                個人情報 修正
            </Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Tab panes={panes} defaultActiveIndex={0} {...props} />
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

export default EditPersonal;
