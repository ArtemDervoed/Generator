import React from 'react';
import	{connect}	from	'react-redux';

class SongProp extends React.Component {
  onInputBlur(event) {
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.remove("__hidden");
    const input = event.target.parentNode.childNodes[2].classList;
    this.props.applyProps(event.target.value);
    input.add("__hidden");
  }
  onLabelDoubleClick(event) {
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.add("__hidden");
    const input = event.target.parentNode.childNodes[2].classList;
    input.remove("__hidden");
  }
  render() {
    return (
      <div className="property">
        <label onDoubleClick={this.onLabelDoubleClick.bind(this)}>{this.props.header}:</label>
        <span>{this.props.value}</span>
        <input onBlur={this.onInputBlur.bind(this)} type="text" className="property--editor __hidden"/>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(SongProp);
