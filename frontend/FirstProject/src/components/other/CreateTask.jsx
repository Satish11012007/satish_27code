import React from 'react'

const CreateTask = ()=>{
    return (
            <div className="mt-7 rounded bg-[#1c1c1c] p-5">
        <form className="flex flex-wrap w-full items-start justify-between gap-6">

          {/* LEFT SIDE */}
          <div className="w-1/2 flex flex-col gap-4">

            {/* Task Title */}
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-600 outline-none"
              />
            </div>

            {/* Date */}
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
                type="date"
                className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-600 outline-none"
              />
            </div>

            {/* Assign to */}
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
              <input
                type="text"
                placeholder="employee name"
                className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-600 outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="text-sm py-2 px-3 w-4/5 rounded bg-transparent border border-gray-600 outline-none"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-2/5 flex flex-col">
            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
            <textarea
              rows="10"
              placeholder="Write task details here..."
              className="text-sm p-3 rounded bg-transparent border border-gray-600 outline-none resize-none"
            ></textarea>
          </div>

          {/* BUTTON */}
          <div className="w-full flex justify-end mt-4">
            <button
              type="submit"
              className="bg-emerald-500 text-black px-8 py-2 rounded font-semibold hover:bg-emerald-600 transition"
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
    )
}

export default CreateTask