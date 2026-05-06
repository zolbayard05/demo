let Button = (props) => {
  if (props.status) {
    return (
      <div className="rounded-[6px] bg-[#3c82f6] px-3 py-1 w-fit">
        {props.title}
      </div>
    );
  } else {
    return (
      <div className="rounded-[6px] bg-[#b2b6be] text-[#363636] px-3 py-1 w-fit">
        {props.title}
      </div>
    );
  }
};
export default Button;
