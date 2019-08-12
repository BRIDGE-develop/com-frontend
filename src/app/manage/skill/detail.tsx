import React from 'react';
import { Table, Divider } from 'semantic-ui-react';
import _ from 'lodash';

const TableCell = () => <Table.Cell rowSpan="7" />;

export const DetailDesc = () => (
    <Table celled structured>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell textAlign="center" rowSpan="2">
                    No
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center" rowSpan="2" width="1">
                    期間
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center" rowSpan="2" width="1">
                    業種
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center" rowSpan="2">
                    業務内容
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center" rowSpan="2" colSpan="2" width="3">
                    技術関連
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center" rowSpan="2">
                    役割
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center" colSpan="8" width="3">
                    作業工程
                </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell>用件定義</Table.HeaderCell>
                <Table.HeaderCell>基本設計</Table.HeaderCell>
                <Table.HeaderCell>詳細設計</Table.HeaderCell>
                <Table.HeaderCell>製造</Table.HeaderCell>
                <Table.HeaderCell>単体テスト</Table.HeaderCell>
                <Table.HeaderCell>結合テスト</Table.HeaderCell>
                <Table.HeaderCell>総合テスト</Table.HeaderCell>
                <Table.HeaderCell>運用・保守</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell textAlign="center" rowSpan="7">
                    1
                </Table.Cell>
                <Table.Cell textAlign="center" rowSpan="7">
                    19.04~現在
                    <Divider />
                    05ヶ月
                </Table.Cell>
                <Table.Cell textAlign="center" rowSpan="7">
                    不動産関連業
                </Table.Cell>
                <Table.Cell>【チーム人数】 {9}名</Table.Cell>
                <Table.Cell width="1">言語</Table.Cell>
                <Table.Cell>Java 8</Table.Cell>
                <Table.Cell textAlign="center" rowSpan="7">
                    PG
                </Table.Cell>
                {_.times(8, i => (
                    <TableCell key={i} />
                ))}
            </Table.Row>
            <Table.Row>
                <Table.Cell rowSpan="3">
                    【作業内容】
                    <br />▶ 人事部向け組織図を過去、現在、将来の時間順に管理する機能開発。Google
                    MapのUIをベンチマークし、HTML5のCanvasの上で具現（オンライン）
                    <br />▶ データ同期化するサブモジュール開発（Apache
                    Sparkバッチ、PostgreSQL⇔Cassandra）
                    <br />▶ 英語圏の開発チームとコラボ
                </Table.Cell>
                <Table.Cell>DB</Table.Cell>
                <Table.Cell>PostgreSQL、Cassandra</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>OS</Table.Cell>
                <Table.Cell>Windows</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>サーバ</Table.Cell>
                <Table.Cell>Tomcat</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    【規模】
                    <br />
                    9ヶ月 : オンライン、バッチ開発（Single page）
                </Table.Cell>
                <Table.Cell>ツール</Table.Cell>
                <Table.Cell>Eclipse、 Atom、 SourceTree、 ARC(Req/Resテスト)</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell rowSpan="2">
                    【その他】
                    <br />▶ Agile、Scrum ・ 大機能を小機能に分け、優先度決める <br />・ 30 days/1
                    sprint
                    <br />・ 機能追加、改選機能を1つずつ出す <br />▶ ユーザー経験(UX Design) <br />
                    ・ Google社の
                    <br />
                    Material Design Guideline参考 <br />▶ デザインパタン <br />
                    ・Lazy Loader実装
                </Table.Cell>
                <Table.Cell>FW</Table.Cell>
                <Table.Cell>Spring</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>他</Table.Cell>
                <Table.Cell>
                    Closure Library、 OpenLayer 3、 LESS、 Apache Spark、 Maven、GitLab、Jenkins
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);
