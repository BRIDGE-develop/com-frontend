import React, { useState } from 'react';
import { Button, Form, Container, Icon, Divider, Header } from 'semantic-ui-react';
import { TitleDiv } from '../../app/component/title';
import { DateInput, DateInputProps } from 'semantic-ui-calendar-react';
import moment from 'moment';
import styled from 'styled-components';

const StyleContainer = styled(Container)`
    .buttonCenter {
        text-align: center;
        padding: 12px;
    }
`;

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];

const UserAdd: React.FC = (): JSX.Element => {
    const [startDate, setStartDate] = useState();
    const [birth, setBirth] = useState();

    const changeStartDate = (e: React.SyntheticEvent<HTMLElement>, date: DateInputProps): void => {
        setStartDate(date.value);
    };

    const changeBirth = (e: React.SyntheticEvent<HTMLElement>, date: DateInputProps): void => {
        setBirth(date.value);
    };

    return (
        <StyleContainer style={{ minHeight: '89.2vh' }}>
            <TitleDiv name="User Add" />
            <Form style={{ marginTop: '14px' }}>
                <Divider horizontal>
                    <Header as="h3">
                        <Icon name="address book outline" />
                        基本情報
                    </Header>
                </Divider>

                <Form.Group widths="equal">
                    <Form.Input fluid label="ID" placeholder="sample@sample.com" />
                    <Form.Input fluid label="名前（韓国語）" placeholder="박보검" />
                    <Form.Input fluid label="名前（漢字）" placeholder="朴寶劍" />
                    <Form.Input fluid label="名前（フリガナ）" placeholder="パクボゴム" />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Select fluid label="Gender" options={options} placeholder="Gender" />
                    <Form.Field>
                        <label>生年月日</label>
                        <DateInput
                            dateFormat="YYYY/MM/DD"
                            iconPosition="left"
                            value={birth || moment().format('YYYY/MM/DD')}
                            onChange={changeBirth}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>入社日</label>
                        <DateInput
                            dateFormat="YYYY/MM/DD"
                            iconPosition="left"
                            value={startDate || moment().format('YYYY/MM/DD')}
                            onChange={changeStartDate}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Input width="3" label="連絡先" placeholder="例) 08000000000" />
                    <Form.Input width="3" label="郵便番号" placeholder="例) 1690074" />
                    <Form.Input
                        width="10"
                        label="住所"
                        placeholder="例) 東京都　新宿区　北新宿　1-6-24　朝日ビル別館　201"
                    />
                </Form.Group>

                <Divider horizontal>
                    <Header as="h3">
                        <Icon name="tty" />
                        緊急連絡先
                    </Header>
                </Divider>

                <Form.Group widths="equal">
                    <Form.Input fluid label="名前" placeholder="박보검" />
                    <Form.Input fluid label="家族関係" placeholder="아버지" />
                    <Form.Input fluid label="連絡先" placeholder="例) 01000000000" />
                </Form.Group>
                <Form.Group>
                    <Form.Input width="4" label="郵便番号" placeholder="例) 1690074" />
                    <Form.Input
                        width="12"
                        label="住所"
                        placeholder="例) 東京都　新宿区　北新宿　1-6-24　朝日ビル別館　201"
                    />
                </Form.Group>
                <div className="buttonCenter">
                    <Button type="submit" color="teal">
                        Submit
                    </Button>
                </div>
            </Form>
        </StyleContainer>
    );
};

export default UserAdd;
