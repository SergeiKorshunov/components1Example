
import { useState } from 'react';
import styles from './app.module.css';

function App() {

  let id = Date.now()
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [isValueValid, setIsValueValid] = useState(false);
  const updatedList = [...list, { id, value }] 

const onInputButtonClick = () =>{
      const promptValue = prompt('Введите значение!'); 
      if(promptValue.length < 3){
        setError('Введено меньше 3-х символов, введите больше!')
        setIsValueValid(false);
      }else if(promptValue.length >= 3){
        setValue(promptValue) 
        setError('')
        setIsValueValid(true);
      }else if(promptValue === null){
        setError('')
        setIsValueValid(false)
        return;
      }
      // console.log(promptValue); 
    }
const onAddButtonCLick = () => {
  setList(updatedList)
  setValue(' ')
  setError(' ')
  console.log(list);
  setIsValueValid(false)
} 

  return (
    
    <div className={styles.app}>
    <h1 className={styles["page-heading"]}>Ввод значения</h1>
    <p className={styles["no-margin-text"]}>
      Текущее значение <code>value</code>: "<output className={styles["current-value"]}>{value}</output>"
    </p>
    {error !== "" ? <div className={styles.error}>{error}</div> : null}
    {/*  <div className={styles.error}>{error !== "" ? error : }</div> */}
    <div className={styles["buttons-container"]}>
      <button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
      <button className={styles.button} onClick={onAddButtonCLick} disabled={!isValueValid}>Добавить в список</button>
    </div>
    <div className={styles["list-container"]}>
      <h2 className={styles["list-heading"]}>Список:</h2>
      <p className={styles["no-margin-text"]}>Нет добавленных элементов</p>
      
      {list.length === 0 ? (
                <p>Нет добавленных элементов</p>
            ) : (
                <ul className={styles.list}>
                    {list.map(item => (
                        <li key={item.id} className={styles["list-item"]}>
                            {item.value}
                        </li>
                    ))}
                </ul>
            )}
    </div>
  </div>
  );
}

export default App;