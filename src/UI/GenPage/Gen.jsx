import React, { Component } from "react";
import { Tree } from "primereact/tree";
import { NodeService } from "../service/NodeService";

export class Gen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService
            .getTreeNodes()
            .then((data) => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <Tree
                        value={this.state.nodes}
                        dragdropScope="demo"
                        onDragDrop={(event) =>
                            this.setState({ nodes: event.value })
                        }
                    />
                </div>
            </div>
        );
    }
}

export default Gen;
