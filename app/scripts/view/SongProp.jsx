import React from 'react';
import	{connect}	from	'react-redux';

class SongProp extends React.Component {
  componentDidMount() {
    this.currentValue = this.refs.value;
    this.input = this.refs.input;
  }
  onInputBlur(event) {
    this.currentValue.classList.remove("__hidden");
    this.props.applyProps(event.target.value);
    this.input.classList.add("__hidden");
  }
  onLabelDoubleClick() {
    this.currentValue.classList.add("__hidden");
    this.input.classList.remove("__hidden");
  }
  render() {
    return (
      <div className="property">
        <label onDoubleClick={this.onLabelDoubleClick.bind(this)}>{this.props.header}:</label>
        <span ref="value">{this.props.value}</span>
        <input ref="input" onBlur={this.onInputBlur.bind(this)} type="text" className="property--editor __hidden"/>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(SongProp);
