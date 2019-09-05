import React from 'react';
import { Button, Modal, Icon, Tab } from 'semantic-ui-react';

const TabCareer = (): JSX.Element => <Tab.Pane>Tab1</Tab.Pane>;

const panes = [
    { menuItem: '経歴1', render: (): JSX.Element => <TabCareer /> },
    { menuItem: '経歴2', render: (): JSX.Element => <TabCareer /> },
];

const EditCareer = (props): JSX.Element => {
    return (
        <Modal trigger={<Button color="teal">変更</Button>}>
            <Modal.Header>
                <Icon name="write" />
                経歴
            </Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Tab panes={panes} defaultActiveIndex={0} states={props} />
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

export default EditCareer;
