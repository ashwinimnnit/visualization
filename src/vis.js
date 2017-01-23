import {default as React} from 'react';
const vis=require('vis');
const uuid=require('uuid');
import NodeDetails from './nodeDetails'
require('./App.css')

class Graph extends React.Component {

    constructor(props) {
        super(props);
        const {identifier}= this.props;
        this.updateGraph= this.updateGraph.bind(this);
        this._instance= null;
        this.state= {
            hierarchicalLayout: true,
            identifier : identifier ? identifier : uuid.v4()
        };
    }

    componentDidMount() {
        this.nodeDeatilsInstance= this.refs.nodeDetails
        this.updateGraph();
    }

    componentDidUpdate() {
        this.updateGraph();
    }


    graphEventListener(networkInstance){
        let self= this
        networkInstance.addEventListener('click', function(params) {
            if(params.nodes[0].includes('#')){
                self.actionTypeNode(params.nodes[0])
            }
            else{
                self.nonActionTYpeNode(params.nodes[0])
            }
        }, false);

    }

    actionTypeNode(concatinatedNodes) {
        //let nodeName= concatinatedNodes.split('#')
       // this.nodeDeatilsInstance.showNodeDetails(nodeName)
    }

    nonActionTYpeNode(nodeName){
        this.nodeDeatilsInstance.showNodeDetails(nodeName)
    }


    updateGraph() {
        let container=document.getElementById(this.state.identifier);
        let options={
            stabilize: true,
            smoothCurves: false,
            interaction:{
                dragNodes:false,
                dragView: false,
                hideEdgesOnDrag: false,
                hideNodesOnDrag: false,
                hover: false,
                hoverConnectedEdges: true,
                keyboard: {
                    enabled: false,
                    speed: {x: 10, y: 10, zoom: 0.02},
                    bindToWindow: true
                },
                multiselect: true,
                navigationButtons: true,
                selectable: true,
                selectConnectedEdges: true,
                tooltipDelay: 300,
                zoomView: true
            },
            edges: {
                color: {
                    color: '#000000',
                    highlight:'red'
                },
                width: 0.5,
                length: 1115,
                arrowScaleFactor: 0.5,
                style: 'arrow',
                label: {
                    enabled: true,
                    min: 14,
                    max: 30,
                    maxVisible: 30,
                    drawThreshold: 5
                },

            },
            nodes: {
                borderWidth: 1,
                },
            physics:{
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -50000,
                    centralGravity: 0.3,
                    springLength: 95,
                    springConstant: 0.04,
                    damping: 0.09,
                    avoidOverlap: 0
                },

            }
        };

        this._instance=new vis.Network(container, this.props.graph, options);
        this.graphEventListener(this._instance)
    }


    render() {
        const {identifier}=this.state;
        const {style}= this.props;
        return (
            <div >
                <NodeDetails ref ='nodeDetails'/>
                <div id={identifier} className = 'canvas'
                 style={style}>
                identifier </div>
            </div>
             )
    }
}

Graph.defaultProps={
    graph: {},
    style: {width: '1180px', height: '830px'}
};

export default Graph;
