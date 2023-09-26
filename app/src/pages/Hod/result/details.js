import React, { useState, useEffect } from "react";
import { getResults, updateResult } from "../../../DB/db";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editedRowIndex, setEditedRowIndex] = useState(-1);
  const [updateFormValues, setUpdateFormValues] = useState({});
  
  const handleResultClick = () => {
    navigate("/results");
  };

  const fetchResults = async () => {
    try {
      const results = await getResults();
      setData(results);
    } catch (error) {
      console.error("Error fetching Results:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleEditClick = (index, result) => {
    setEditedRowIndex(index);
    setUpdateFormValues(result);
  };

  const handleUpdateFormChange = (e, fieldName) => {
    setUpdateFormValues({
      ...updateFormValues,
      [fieldName]: e.target.value,
    });
  };

  const handleUpdateSubmit = async (resultId) => {
    try {
      const updatedResult = await updateResult(resultId, updateFormValues);
      const updatedData = data.map((result, index) => {
        if (index === editedRowIndex) {
          return updatedResult;
        }
        return result;
      });
      setData(updatedData);
      setEditedRowIndex(-1);
      setUpdateFormValues({});
    } catch (error) {
      console.error("Error updating Result:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleResultClick}
        className="bg-lightBlue text-white font-medium py-2 px-4 rounded-md mb-4"
      >
        View Final Result
      </button>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
              Ftitle
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
              GM
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
              interimA
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
              interimB
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
              interimC
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
              SupervisorR
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-gray-800 font-semibold">
              Coordinator
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((result, index) => (
            <tr key={result._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200">
                {editedRowIndex === index ? (
                  <input
                    type="text"
                    value={updateFormValues.Ftitle || ""}
                    onChange={(e) =>
                      handleUpdateFormChange(e, "Ftitle")
                    }
                    className="border border-gray-300 rounded-md p-1"
                  />
                ) : (
                  result.Ftitle
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {editedRowIndex === index ? (
                  <input
                    type="text"
                    value={updateFormValues.GM || ""}
                    onChange={(e) =>
                      handleUpdateFormChange(e, "GM")
                    }
                    className="border border-gray-300 rounded-md p-1"
                  />
                ) : (
                  result.GM
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {editedRowIndex === index ? (
                  <input
                    type="text"
                    value={updateFormValues.interimA || ""}
                    onChange={(e) =>
                      handleUpdateFormChange(e, "interimA")
                    }
                    className="border border-gray-300 rounded-md p-1"
                  />
                ) : (
                  result.interimA
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {editedRowIndex === index ? (
                  <input
                    type="text"
                    value={updateFormValues.interimB || ""}
                    onChange={(e) =>
                      handleUpdateFormChange(e, "interimB")
                    }
                    className="border border-gray-300 rounded-md p-1"
                  />
                ) : (
                  result.interimB
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {editedRowIndex === index ? (
                  <input
                    type="text"
                    value={updateFormValues.interimC || ""}
                    onChange={(e) =>
                      handleUpdateFormChange(e, "interimC")
                    }
                    className="border border-gray-300 rounded-md p-1"
                  />
                ) : (
                  result.interimC
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {editedRowIndex === index ? (
                  <input
                    type="text"
                    value={updateFormValues.SupervisorR || ""}
                    onChange={(e) =>
                      handleUpdateFormChange(e, "SupervisorR")
                    }
                    className="border border-gray-300 rounded-md p-1"
                  />
                ) : (
                  result.SupervisorR
                )}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {editedRowIndex === index ? (
                  <input
                    type="text"
                    value={updateFormValues.Coordinator || ""}
                    onChange={(e) =>
                      handleUpdateFormChange(e, "Coordinator")
                    }
                    className="border border-gray-300 rounded-md p-1"
                  />
                ) : (
                  result.Coordinator
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
