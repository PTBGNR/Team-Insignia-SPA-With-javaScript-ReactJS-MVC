/**
 * Created by Hristo on 03.12.2016 г..
 */

import React from 'react';
import Pager from 'react-pager';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.handlePageChanged = this.handlePageChanged.bind(this);

        this.state = {
            total:       10,
            current:     1,
            visiblePage: 3,
        };
    }

    handlePageChanged(newPage) {
        this.setState({ current : newPage });
    }

    render() {
        return (
            <Pager
                total={this.state.total}
                current={this.state.current}
                visiblePages={this.state.visiblePage}
                titles={{ first: '<|', last: '>|' }}
                onPageChanged={this.handlePageChanged}
            />
        );
    }
}