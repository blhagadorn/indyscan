import {Component} from 'react';
import TxListItem from "../TxListItem/TxListItem";
import {Table} from 'semantic-ui-react';
import {extractTxInformation} from "../../txtools";
import {txCodeToTxType} from "../../data/tx-types";
import React from "react";

class TxListCompact extends Component {

    render() {
        return (
            <Table striped celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>TxNo</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Timestamp</Table.HeaderCell>
                        <Table.HeaderCell>TxID</Table.HeaderCell>
                        <Table.HeaderCell>RootHash</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {this.props.txs.map((txn) => {
                    const txInfo = extractTxInformation(txn);
                    return (
                        <TxListItem baseUrl={this.props.baseUrl}
                                    network={this.props.network}
                                    txType={this.props.txType}
                                    key={txn.seqNo} txInfo={txInfo}/>
                    )
                })}
                </Table.Body>
            </Table>
        )
    }
}

export default TxListCompact;