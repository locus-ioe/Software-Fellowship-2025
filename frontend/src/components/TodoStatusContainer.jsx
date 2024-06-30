import PropTypes from "prop-types";

import { FaRegCircleCheck } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoStatusContainer = ({ title, todos, icon }) => {
  return (
    <div className="shadow-2xl rounded-[5rem] bg-white px-12 py-10  h-fit">
      <div className="flex space-x-2 my-3 mb-6">
        <div className="flex justify-center items-center">{icon}</div>
        <div className="flex justify-center items-center text-xl font-semibold tracking-wide">
          {title}
        </div>
      </div>
      <div className="flex flex-col space-y-10">
        {todos.map(({ title, status, description }) => {
          return (
            <div
              key={`${title}${status}`}
              className={`${
                status == "ongoing" ? "bg-[#FFAA041A]" : "bg-[#E6FAEA]"
              } rounded-3xl p-4 px-6`}
            >
              <div className="text-base font-medium my-2">{title}</div>
              <div className="text-sm text-gray-800 mb-6">{description}</div>
              <div className="text-[#B3B7EE] text-2xl flex space-x-6 justify-end">
                <GrEdit className="cursor-pointer hover:text-blue-500" />
                <RiDeleteBinLine className="cursor-pointer hover:text-red-500" />
                <FaRegCircleCheck className="cursor-pointer hover:text-green-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TodoStatusContainer.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.array,
  icon: PropTypes.element,
};
export default TodoStatusContainer;
