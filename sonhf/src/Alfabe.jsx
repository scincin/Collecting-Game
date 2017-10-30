import React, {Component} from 'react';
import alphabets from './alphabets.json';
import classNames from 'classnames';

class Alfabe extends Component {
  constructor(props){
    super(props);
    this.state = {
      alphabets: alphabets,
      currentIndex: 0,
      currentTick: 0,
      random: false,
      sound:true
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.playSound = this.playSound.bind(this);
    this.switchRandom = this.switchRandom.bind(this);
    this.switchSound = this.switchSound.bind(this);
  }
  switchRandom(){
    this.setState({random:!this.state.random})
  }
  switchSound(){
    this.setState({sound:!this.state.sound})
  }
  componentDidMount(){
    let letterSound = document.querySelector('audio[data-key="letter"]');
    if (this.state.currentIndex ===0) {
      letterSound.currentTime = 0;
      letterSound.play();
    }
  }
  componentDidUpdate(prevProps,prevState){
    this.playSound();
  }
  playSound(){
    let letterSound = document.querySelector('audio[data-key="letter"]');
    let wordSound = document.querySelector('audio[data-key="word"]');
    if (this.state.currentIndex ===0) {
      letterSound.currentTime = 0;
      letterSound.play();
    }else {
      wordSound.currentTime = 0;
      wordSound.play();
    }
  }


  next(){
    if (this.state.currentIndex === this.state.alphabets.length -1) {
      if (this.state.currentTick < 2) {
        this.setState({currentTick:this.state.currentTick +1});
      }
    else {
      this.setState({currentIndex:0,currentTick:0});
    }
  }else {
      if (this.state.currentTick < 2) {
        this.setState({currentTick:this.state.currentTick +1});
      }else {
        this.setState({currentIndex:this.state.currentIndex + 1,currentTick:0});
      }

    }
  }

  previous(){
    if (this.state.currentIndex > 0) {
      this.setState({currentIndex:this.state.currentIndex -1});
    }else {
      this.setState({currentIndex:this.state.alphabets.length -1});
    }
  }
  render() {
    let showImage = this.state.currentTick !== 0 ? true: false;
    let showWord = this.state.currentTick === 2 ? true : false;
    return(


      <div className="game">
        <div align="center">
          <span className="random-label">Rasgele</span>
          <label className="switch">
            <input type="checkbox"
            onClick={this.switchRandom}
            defaultValue="false"
            checked={this.state.random}
          />
          <div className="slider round"></div>
        </label>

        <span className="random-label">Ses</span>
        <label className="switch">
          <input type="checkbox"
          onClick={this.switchSound}
          defaultValue="false"
          checked={this.state.sound}
        />
        <div className="slider round"></div>
      </label>

        </div>
        <div className="option">
          <div className="fields">
            <div className="field-block">
            {this.state.alphabets[this.state.currentIndex].letter}
            </div>
            <audio src={this.state.alphabets[this.state.currentIndex].letterSound}
              data-key="letter"/>

          </div>
          <div className="buttons">
            <a className="button prev" onClick={this.previous}>Önceki</a>
            <a className="button sound">Tekrar</a>
            <a className="button next" onClick={this.next}>Sonraki</a>
          </div>
          <div className="fields">
            <div className="field-block">
              <div className="left-field">
                <div  className={classNames('placeholder-span',{'hide':showImage})}>
                  Resmi görmek için sonrakine
                </div>

              <img  className={classNames('letter-image',{'hide':!showImage})}
                    src={this.state.alphabets[this.state.currentIndex].image}
                    alt={this.state.alphabets[this.state.currentIndex].word}
            />
          </div>
            <audio src={this.state.alphabets[this.state.currentIndex].letterSound}
              data-key="word"/>

              <div className="right-field">
                <div className={classNames('placeholder-span',{'hide':showWord})}>
                  Sesi duymak için Tekrar et tıkla
                </div>

              <div className={classNames('word',{'hide':!showWord})}>
                {this.state.alphabets[this.state.currentIndex].word.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default Alfabe;
