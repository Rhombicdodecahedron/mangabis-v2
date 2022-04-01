import React, {Component} from "react";

class Home extends Component {

    componentDidMount() {
        document.title = this.props.title
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;