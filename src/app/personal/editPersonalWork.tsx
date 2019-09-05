/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react';
import { Button, Modal, Icon, Table, Dropdown, DropdownProps, Input } from 'semantic-ui-react';
import moment from 'moment';
import { DateInput, DateInputProps } from 'semantic-ui-calendar-react';

import 'react-datepicker/dist/react-datepicker.css';

interface PersonalWorkProps {
    workplace: {
        place: string;
        contract: string;
        startDate: string | undefined;
        endDate: string | null;
    };
}

const options = [
    { key: 0, text: '予定無し', value: 0 },
    { key: 1, text: '1ヶ月後', value: 1 },
    { key: 2, text: '2ヶ月後', value: 2 },
    { key: 3, text: '3ヶ月後', value: 3 },
    { key: 4, text: '4ヶ月後', value: 4 },
];

const EditPersonalWork: React.FC<PersonalWorkProps> = (props): JSX.Element => {
    const currentDate = moment().locale('jp');

    const [startDate, setStartDate] = useState(props.workplace.startDate);
    const [endDate, setEndDate] = useState(props.workplace.endDate);

    const changeStartDate = (e: React.SyntheticEvent<HTMLElement>, date: DateInputProps): void => {
        setStartDate(date.value);
    };

    const setDropEndDate = (e: React.SyntheticEvent<HTMLElement>, data: DropdownProps): void => {
        !data.value
            ? setEndDate(null)
            : setEndDate(
                  currentDate
                      .add(data.value as number, 'months')
                      .local()
                      .format('YYYY/MM')
              );
    };

    return (
        <Modal trigger={<Button color="teal">変更</Button>}>
            <Modal.Header>
                <Icon name="write" />
                現場情報 修正
            </Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Table definition>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell width="3">場所</Table.Cell>
                                <Table.Cell width="9" colSpan="2">
                                    <Input
                                        placeholder="現場住所"
                                        defaultValue={props.workplace.place}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>元請会社</Table.Cell>
                                <Table.Cell colSpan="2">
                                    <Input
                                        placeholder="現場住所"
                                        defaultValue={props.workplace.contract}
                                        style={{ width: '100%' }}
                                    />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>開始日</Table.Cell>
                                <Table.Cell colSpan="2">
                                    <DateInput
                                        dateFormat="YYYY/MM/DD"
                                        iconPosition="left"
                                        value={
                                            startDate ||
                                            moment(props.workplace.startDate).format('YYYY/MM/DD')
                                        }
                                        onChange={changeStartDate}
                                    />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>終了希望日</Table.Cell>
                                <Table.Cell>{endDate || '予定無し'}</Table.Cell>
                                <Table.Cell>
                                    <Dropdown
                                        placeholder={endDate || '予定無し'}
                                        options={options}
                                        selection
                                        item
                                        onChange={setDropEndDate}
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

export default EditPersonalWork;
