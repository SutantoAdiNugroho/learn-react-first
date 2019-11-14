const e = React.createElement

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {liked : false}
    }


render() {
    if (this.state.liked) {
        return "You liked this"
    }

    return e (
        "button",
        {
            onDoubleClick: () => this.ListeningStateChangedEvent({liked:true}),
            onMouseLeave: () => {
                this.setState({liked:true});
            },
            onClick: () => {
                this.setState({liked:true});
            }
        },
        "Like"
        );
    }
}

const donContainer = document.getElementById("like_button_container")
ReactDOM.render(e(LikeButton), donContainer)