import styles from './Input.module.css'

function Input({
  //propriedades (props) do input
  type, 
  text, 
  name, 
  placeholder, 
  handleOnChange, //nativo do react, para mudanças de estado
  value, 
  multiple //trabalhar com multiplos dados (no caso deste app arquivos de imagens)
}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange}
        value={value}
        {...(multiple ? {multiple} : '')}
      />
    </div> 
  )
}

export default Input