export function Label({ inputId, inputName }) {
  return <label htmlFor={inputId}>{inputName}</label>;
}
