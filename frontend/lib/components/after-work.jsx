var React = require('react');
var Helper = require('../helpers/helper.js');

var AfterWork = React.createClass({
	to_break: function(){
		this.props.onChangeMode("break");
	},
	render: function() {
		return (
			<div>
				<div className="flex-item sentence no-padding">
					<span className="animated bounceInDown information">work time`s over!</span>
					<div className="slug">
							{'teamodorro.io/'+this.props.slug}
						</div>
				</div>
				<div onClick={this.to_break} className="flex-item">
					<div className="press after_work animated pulse">
						break!
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AfterWork;
