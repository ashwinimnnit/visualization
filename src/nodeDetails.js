import {default as React} from 'react';
import Flow from './demo-flow'
require('./App.css')
import JSONTree from 'react-json-tree'

class NodeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.theme = {
            scheme: 'monokai',
            author: 'wimer hazenberg (http://www.monokai.nl)',
            base00: '#272822',
            base01: '#383830',
            base02: '#49483e',
            base03: '#75715e',
            base04: '#a59f85',
            base05: '#f8f8f2',
            base06: '#f5f4f1',
            base07: '#f9f8f5',
            base08: '#f92672',
            base09: '#fd971f',
            base0A: '#f4bf75',
            base0B: '#a6e22e',
            base0C: '#a1efe4',
            base0D: '#FF0000',
            base0E: '#ae81ff',
            base0F: '#cc6633'
        }
         this.state ={
             nodeDetails : ''
         }
    }

    hideNodeDetailsBox(){
        this.setState({nodeDetails: ''})
    }


    showNodeDetails(nodeName){

        this.setState({nodeDetails: Flow.schema.nodes[nodeName] })
    }

    render() {
        let data = this.state.nodeDetails
        if (data !== '') {
            return (
                <div className="nodeDetails">
                    <div className="closebuttonheader">
                    <span className="closebutton" onClick={this.hideNodeDetailsBox.bind(this)}> x</span>
                    </div>
                    <div className="jsondetails">
                    <JSONTree data={data} theme={{
                        extend: this.theme
                    }} />
                    </div>
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }
}

export default NodeDetails