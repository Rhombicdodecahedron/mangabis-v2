import React, {Component} from "react";

class NotFound extends Component {
    
    componentDidMount() {
        document.title = this.props.title
    }

    render() {
        return (
            <div>
                <h1>404</h1>
                <p>Page not found</p>
            </div>
        );
    }
}

export default NotFound;