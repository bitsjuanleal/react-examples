import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class Examples extends Component {
  render() {
    return (
      <Container className="App">
          <h1>Curso de React</h1>
          <MyComponent texto="Learn React first time" />
          <MyComponent texto="Otro texto" />
          <TextCustom>Soy un texto directo</TextCustom>
          <TextCustom></TextCustom>
          <TextDefaultCustom texto="Me has puesto un texto"></TextDefaultCustom>
          <TextDefaultCustom></TextDefaultCustom>
          <Button variant="contained" color="primary">
            Hola Mundo!
        </Button>
      </Container>
    );
  }
}

class MyComponent extends Component {

  state = {
    texto: this.props.texto
  }

  constructor(props) {
    super(props);
    setTimeout(() => {
      this.setState({
        texto: this.state.texto + '... (Soy reactivo!)'
      })
    }, 3000)
  }

  changeText = () => {
    this.setState({
      texto: this.state.texto + '... que sí!'
    });
  }

  render() {
    return (
      <div>
        <TextCustom>{this.state.texto}</TextCustom>
        <button onClick={this.changeText}>seguro eres reactivo?</button>
      </div>
    )
  }
}

class TextCustom extends Component {
  render() {
    return (
      <div>
        {this.props.children
          ? <p className="text-custom">{this.props.children}</p>
          : ''
        }
      </div>
    )
  }
}

class TextDefaultCustom extends Component {
  render() {
    return (
      <div>
        <p className="text-custom">{this.props.texto}</p>
      </div>
    )
  }
}
TextDefaultCustom.defaultProps = {
  texto: 'No me has puesto un texto =('
}

export default Examples;
