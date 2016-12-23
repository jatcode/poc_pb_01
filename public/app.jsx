
// A placeholder image if the user does not have one
const PLACEHOLDER = 'https://placeimg.com/60/60/people';
// An anonymous user if the message does not have that information
const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

// Establish a Socket.io connection
const socket = io();

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.

const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  // Use localStorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }));


const ComposeMessage = React.createClass({
	getInitialState(){
		return {text: ''};
	},

	updateText(ev){
		this.setState({text: ev.target.value});
	},

	sendMessage(ev){
		//Get the messages servive
		const messageService = app.service('messages');
		//create a new message with the text from the input field
		messageService.create({
			text: this.state.text
		}).then(()=>this.setState({text: ''}));

		ev.preventDefault();
	},
  render(){
		return <form className="flex flex-row flex-space-between"
				onSubmit={this.sendMessage}>
			<input type="text" name ="text" className="flex flex-1"
				value={this.state.text} onChange={this.updateText} />
			<button className="button-primary" type="submit">SendT</button>

			<form>;
  }
})
