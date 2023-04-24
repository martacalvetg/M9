import './App.css';
import React, { useState, useEffect } from 'react';
import ButtonsTamagochi from './components/ButtonsTamagochi';
import InfoTamagochi from './components/InfoTamagochi';

function Tamagochi(){
  const [name, setName] = useState('Tamagochi');
  const [age, setAge] = useState(0);
  const [health, setHealth] = useState(100);
  const [happiness, setHappiness] = useState(100);
  const [crazyness, setCrazyness] = useState(0);
  const [Hunger, setHunger] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(age => age + 1);
      
    }, 1000);

    const interval2 = setInterval(() => {
      setHealth(health => Math.max(0, health - 1));
      setCrazyness(crazyness => Math.min(100, crazyness + 1));
      setHunger(Hunger => Math.max(0, Hunger - 1));
      setHappiness(happiness => Math.max(0, happiness - 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const feed = () => {
    setHealth(health => Math.min(100, health + 10));
    setHunger(Hunger => Math.min(100, Hunger + 10));
    setCrazyness(crazyness => Math.max(0, crazyness - 5));
  }

  const play = () => {
    setHappiness(happiness => Math.min(100, happiness + 10));
    setHunger(Hunger => Math.min(100, Hunger - 10));
    setCrazyness(crazyness => Math.max(0, crazyness - 2));
  }

  const read = () => {
    setHappiness(happiness => Math.min(100, happiness + 10));
    setCrazyness(crazyness => Math.max(0, crazyness - 5));
  }

  const hit = () => {
    setHealth(health => Math.max(0, health - 10));
    setHappiness(happiness => Math.max(0, happiness - 10));
    setCrazyness(crazyness => Math.min(100, crazyness + 10));
  }

  const reload = () => {
    window.location.reload();
  }

  return (
    <div>
      {health === 0 || crazyness === 100 ||happiness === 0 ? (
        <div>
          <div class="ifDead">
            <p>Your tamagochi is dead  :(</p>
          </div>
          <button class="reloadButton" onClick={reload}>Play again</button>
        </div>
      ) : (
        <>    
          <InfoTamagochi name={name} age={age} health={health} crazyness={crazyness} happiness={happiness} Hunger={Hunger}/>
          <ButtonsTamagochi feed={feed} play={play} read={read} hit={hit}/>
        </>
        )}
    </div>  
  );
}

export default Tamagochi;
