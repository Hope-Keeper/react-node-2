const Input = ({name,value,lable,onChange}) => {
    return ( <>
      <input onChange={onChange} 
      value={value} 
      type="text" 
      class="form-control" 
      name={name} 
      placeholder={lable}
      required="" autofocus="" />

    </> );
}
 
export default Input;