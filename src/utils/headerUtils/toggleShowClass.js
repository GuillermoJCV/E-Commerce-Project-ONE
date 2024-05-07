const toggleShowClass = (ref) => {
  if(ref.current !== null) ref.current.classList.toggle("show")
  else console.error("Reference isn't used yet")
};

export {
  toggleShowClass
};