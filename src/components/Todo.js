let Todo = (props) => {
  return (
    <div className="flex items-center h-[62px] justify-between w-[345px] bg-[#f9fafb] rounded-md p-4">
      <div className="flex items-center gap-2">
        <input type="checkbox" checked={props.isChecked} readOnly />
        <p className="text-black">{props.title}</p>
      </div>

      <button onClick={() => props.deleteTask(props.index)} className="rounded-md bg-[#fef2f2] px-3 py-1.5 text-[#ef4444]">
        Delete
      </button>
    </div>
  );
};
export default Todo;
