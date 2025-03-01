import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm} from '@inertiajs/react';
import { Plus, X } from "lucide-react";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PrimaryButton from '@/Components/PrimaryButton';
import { usePage } from '@inertiajs/react';

export default function Dashboard({ auth, assessments  }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [trainingStatus, setTrainingStatus] = useState("");
  const [trainingStatus2, setTrainingStatus2] = useState("");
  const [trainingStatus3, setTrainingStatus3] = useState("");
  const [trainingStatus4, setTrainingStatus4] = useState("");
  const [selectedQualification, setSelectedQualification] = useState("");
  const [selectedQualification2, setSelectedQualification2] = useState("");
  const [selectedQualification3, setSelectedQualification3] = useState("");
  const [selectedQualification4, setSelectedQualification4] = useState("");
  const [showQualification2, setShowQualification2] = useState(false);
  const [showQualification3, setShowQualification3] = useState(false);
  const [showQualification4, setShowQualification4] = useState(false);



  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFile2, setPdfFile2] = useState(null);
  const [pdfFile3, setPdfFile3] = useState(null);
  const [pdfFile4, setPdfFile4] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      setPdfFile(fileURL);
    } else {
      setPdfFile(null);
      alert('Please select a PDF file.');
    }
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      setPdfFile2(fileURL);
    } else {
      setPdfFile2(null);
      alert('Please select a PDF file.');
    }
  };

  const handleFileChange3 = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      setPdfFile3(fileURL);
    } else {
      setPdfFile3(null);
      alert('Please select a PDF file.');
    }
  };

  const handleFileChange4 = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const fileURL = URL.createObjectURL(file);
      setPdfFile4(fileURL);
    } else {
      setPdfFile4(null);
      alert('Please select a PDF file.');
    }
  };




  function openModal() {
    setIsOpen(true);
    setStep(1);
    setIsChecked(false);
    setTrainingStatus("");
    setTrainingStatus2("");
    setTrainingStatus3("");
    setTrainingStatus4("");
    setShowQualification2(false);
    setShowQualification3(false);
    setShowQualification4(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddQualification = () => {
    if (!showQualification2) {
      setShowQualification2(true);
    } else if (!showQualification3) {
      setShowQualification3(true);
    } else if (!showQualification4) {
      setShowQualification4(true);
    }
  };

  const { data, setData, post, processing} = useForm({
    assessment_date: '',
    qualification: '', // Ensure it starts as an empty string, not null
    no_of_pax: '',
    training_status: '',
   type_of_scholar: '',
   type_of_non_scholar: '',
    qualification2: null,
    no_of_pax2: null,
    trainingStatus2: null,
    type_of_scholar2: null,
    type_of_non_scholar2: null,
    qualification3: null,
    no_of_pax3:null,
    trainingStatus3:null,
    type_of_scholar3: null,
   type_of_non_scholar3:null,
    qualification4:null,
    no_of_pax4: null,
    trainingStatus4: null,
    type_of_scholar4:null,
    type_of_non_scholar4: null,
    ellt: '',
    rfftp: '',
    oropfafns: null,
    sopcctvr: '',
    ellt2: null,
    rfftp2: null,
    oropfafns2: null,
    sopcctvr2: null,
    ellt3: null,
    rfftp3: null,
    oropfafns3: null,
    sopcctvr3: null,
    ellt4: null,
    rfftp4: null,
    oropfafns4: null,
    sopcctvr4: null,
});


// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("Form submitted", data); // Debugging output
//   post(route('assessments.store'), {
//       onSuccess: () => console.log("Form successfully posted"),
//       onError: (error) => console.log("Form submission error:", error),
//   });
// };

const { flash } = usePage().props;

<div>
    {flash?.success && (
      <div className="bg-green-500 text-white p-2 rounded">
        {flash.success}
      </div>
    )}

    {flash?.error && (
      <div className="bg-red-500 text-white p-2 rounded">
        {flash.error}
      </div>
    )}
  </div>

const handleSubmit = (e) => {
  e.preventDefault();
  
  post(route('assessments.store'), {
    onSuccess: () => {
      console.log("Form successfully posted");
      // Set a flash message and reload the page
      Inertia.visit(route('dashboard'), {
        method: 'get',
        preserveScroll: true,
        only: ['flash'],
      });
    },
    onError: (error) => {
      console.log("Form submission error:", error);
    },
  });
};

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-white leading-tight">
            {auth.user.role === "admin" ? "Admin Dashboard" : "User Dashboard"}
          </h2>
          {auth.user.role === "user" && (
            <button
              onClick={openModal}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 flex items-center gap-2"
            >
              <Plus size={18} />
              Assessment
            </button>
          )}
        </div>
      }
    >
      <Head title="Dashboard" />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-blue-200">
          <thead className="bg-white border border-blue-700 shadow-lg">
            <tr>
              {[ "Qualification", "Status", "No of Pax", "Type of Scholar", "Actions"].map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-3 text-left text-xs font-large text-blue-500 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assessments.data.map((assessment) => (
              <tr key={assessment.id}>
                {/* <td className="px-6 py-4 whitespace-nowrap">{assessment.user.name}</td> */}
                <td className="px-6 py-4 whitespace-nowrap">{assessment.qualification}
                {assessment.qualification2}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    assessment.status === "pending" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                    {assessment.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{assessment.no_of_pax}</td>
                <td className="px-6 py-4 whitespace-nowrap">{assessment.type_of_non_scholar}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/assessments/${assessment.id}/edit`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                  <Link href={`/assessments/${assessment.id}/delete`} className="ml-2 text-red-600 hover:text-red-900">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {assessments.links.map((link, index) => (
          <Link
            key={index}
            href={link.url ?? '#'}
            className={`px-3 py-1 mx-1 border rounded ${
              link.active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-4">
              
              
            <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-3xl">

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Assessment Form</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  {step === 1 && (
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">Apply Assessment Schedule</h2>

                      <div className="mb-3">
                        <label className="block text-gray-700">Desired Date of Assessment:</label>
                        <input type="date" name="assessment_date" value={data.assessment_date}  onChange={(e) => setData('assessment_date', e.target.value)} className="mt-1 p-2 border rounded-lg w-full" />
                      </div>

                      <div className="mb-3">
                        <label className="block text-gray-700">Qualification:</label>
                        <select
          name="qualification"
          value={data.qualification}
          onChange={(e) => setData('qualification',e.target.value)}
          className="mt-1 p-2 border rounded-lg w-full"
        >
                          <option value="" disabled>
                            Select your qualification
                          </option>
                          <option value="FBS NC II">FBS NC II</option>
                          <option value="CSS NC II">CSS NC II</option>
                          <option value="Cook NC II">Cook NC II</option>
                          <option value="Driving NC II">Driving NC II</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="block text-gray-700">Number of Pax:</label>
                        <select name="no_of_pax" value={data.no_of_pax}  onChange={(e) => setData('no_of_pax', e.target.value)} defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                          <option value="" disabled hidden>
                            Select your number of pax
                          </option>
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="block text-gray-700">Training Status:</label>
                        <select
                          name="training_status"
                          value={data.training_status}
                          onChange={(e) => setData('training_status',e.target.value)}
                          className="mt-1 p-2 border rounded-lg w-full"
                        >
                          <option value="" disabled>
                            Select your training status
                          </option>
                          <option value="scholar">Scholar</option>
                          <option value="non-scholar">Non-Scholar</option>
                        </select>
                      </div>

                      {data.training_status === "scholar" && (
                        <div className="mb-3">
                          <label className="block text-gray-700">Scholarship Type:</label>
                          <select name="type_of_scholar" value={data.type_of_scholar}
                          onChange={(e) => setData('type_of_scholar',e.target.value)} defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                            <option value="" disabled>
                              Select your scholarship type
                            </option>
                            <option value="ttsp">TTSP</option>
                            <option value="cfsp">CFSP</option>
                            <option value="uaqtea">UAQTEA</option>
                            <option value="twsp">TWSP</option>
                          </select>
                        </div>
                      )}

                      {data.training_status === "non-scholar" && (
                        <div className="mb-3">
                          <label className="block text-gray-700">Non Scholarship Type:</label>
                          <select name="type_of_non_scholar" value={data.type_of_non_scholar}
                          onChange={(e) => setData('type_of_non_scholar',e.target.value)} defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                            <option value="" disabled>
                              Select your non scholarship type
                            </option>
                            <option value="walk-in">Walk-In</option>
                            <option value="CAWS">CAWS</option>
                            <option value="three">Three</option>
                            <option value="four">Four</option>
                          </select>
                        </div>
                      )}

                    
                      {/* Second qualification section */}
                      {showQualification2 && (
                        <div className="mt-4">
                          <div className="mb-3">
                            <label className="block text-gray-700">Qualification 2:</label>
                            <select
          name="qualification2"
          value={selectedQualification2}
          onChange={(e) => setSelectedQualification2(e.target.value)}
          className="mt-1 p-2 border rounded-lg w-full"
        >
                              <option value="" disabled>
                                Select your qualification 2
                              </option>
                              <option value="FBS NC II">FBS NC II</option>
                              <option value="CSS NC II">CSS NC II</option>
                              <option value="Cook NC II">Cook NC II</option>
                              <option value="Driving NC II">Driving NC II</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="block text-gray-700">Number of Pax 2:</label>
                            <select name="no_of_pax2" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                              <option value="" disabled hidden>
                                Select your number of pax 2
                              </option>
                              {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="block text-gray-700">Training Status 2:</label>
                            <select
                              name="training_status2"
                              value={trainingStatus2}
                              onChange={(e) => setTrainingStatus2(e.target.value)}
                              className="mt-1 p-2 border rounded-lg w-full"
                            >
                              <option value="" disabled>
                                Select your training status 2
                              </option>
                              <option value="scholar">Scholar</option>
                              <option value="non-scholar">Non-Scholar</option>
                            </select>
                          </div>

                          {trainingStatus2 === "scholar" && (
                            <div className="mb-3">
                              <label className="block text-gray-700">Scholarship Type 2:</label>
                              <select name="type_of_scholar" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                                <option value="" disabled>
                                  Select your scholarship type 2
                                </option>
                                <option value="ttsp">TTSP</option>
                                <option value="cfsp">CFSP</option>
                                <option value="uaqtea">UAQTEA</option>
                                <option value="twsp">TWSP</option>
                              </select>
                            </div>
                          )}

                          {trainingStatus2 === "non-scholar" && (
                            <div className="mb-3">
                              <label className="block text-gray-700">Non Scholarship Type 2:</label>
                              <select name="type_of_scholar2" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                                <option value="" disabled>
                                  Select your non scholarship type 2
                                </option>
                                <option value="walk-in">Walk-In</option>
                                <option value="CAWS">CAWS</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                              </select>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Third qualification section */}
                      {showQualification3 && (
                        <div className="mt-4">
                          <div className="mb-3">
                            <label className="block text-gray-700">Qualification 3:</label>
                            <select
          name="qualification3"
          value={selectedQualification3}
          onChange={(e) => setSelectedQualification3(e.target.value)}
          className="mt-1 p-2 border rounded-lg w-full"
        >
                              <option value="" disabled>
                                Select your qualification 3
                              </option>
                              <option value="FBS NC II">FBS NC II</option>
                              <option value="CSS NC II">CSS NC II</option>
                              <option value="Cook NC II">Cook NC II</option>
                              <option value="Driving NC II">Driving NC II</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="block text-gray-700">Number of Pax 3:</label>
                            <select name="no_of_pax3" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                              <option value="" disabled hidden>
                                Select your number of pax 3
                              </option>
                              {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="block text-gray-700">Training Status 3:</label>
                            <select
                              name="training_status3"
                              value={trainingStatus3}
                              onChange={(e) => setTrainingStatus3(e.target.value)}
                              className="mt-1 p-2 border rounded-lg w-full"
                            >
                              <option value="" disabled>
                                Select your training status 3
                              </option>
                              <option value="scholar">Scholar</option>
                              <option value="non-scholar">Non-Scholar</option>
                            </select>
                          </div>

                          {trainingStatus3 === "scholar" && (
                            <div className="mb-3">
                              <label className="block text-gray-700">Scholarship Type 3:</label>
                              <select name="type_of_scholar3" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                                <option value="" disabled>
                                  Select your scholarship type 3
                                </option>
                                <option value="ttsp">TTSP</option>
                                <option value="cfsp">CFSP</option>
                                <option value="uaqtea">UAQTEA</option>
                                <option value="twsp">TWSP</option>
                              </select>
                            </div>
                          )}

                          {trainingStatus3 === "non-scholar" && (
                            <div className="mb-3">
                              <label className="block text-gray-700">Non Scholarship Type 3:</label>
                              <select name="type_of_scholar3" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                                <option value="" disabled>
                                  Select your non scholarship type 3
                                </option>
                                <option value="walk-in">Walk-In</option>
                                <option value="CAWS">CAWS</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                              </select>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Fourth qualification section */}
                      {showQualification4 && (
                        <div className="mt-4">
                          <div className="mb-3">
                            <label className="block text-gray-700">Qualification 4:</label>
                            <select
          name="qualification4"
          value={selectedQualification4}
          onChange={(e) => setSelectedQualification4(e.target.value)}
          className="mt-1 p-2 border rounded-lg w-full"
        >
                              <option value="" disabled>
                                Select your qualification 4
                              </option>
                              <option value="FBS NC II">FBS NC II</option>
                              <option value="CSS NC II">CSS NC II</option>
                              <option value="Cook NC II">Cook NC II</option>
                              <option value="Driving NC II">Driving NC II</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="block text-gray-700">Number of Pax 4:</label>
                            <select name="no_of_pax4" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                              <option value="" disabled hidden>
                                Select your number of pax 4
                              </option>
                              {[...Array(10)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="mb-3">
                            <label className="block text-gray-700">Training Status 4:</label>
                            <select
                              name="training_status4"
                              value={trainingStatus4}
                              onChange={(e) => setTrainingStatus4(e.target.value)}
                              className="mt-1 p-2 border rounded-lg w-full"
                            >
                              <option value="" disabled>
                                Select your training status 4
                              </option>
                              <option value="scholar">Scholar</option>
                              <option value="non-scholar">Non-Scholar</option>
                            </select>
                          </div>

                          {trainingStatus4 === "scholar" && (
                            <div className="mb-3">
                              <label className="block text-gray-700">Scholarship Type 4:</label>
                              <select name="type_of_scholar4" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                                <option value="" disabled>
                                  Select your scholarship type 4
                                </option>
                                <option value="ttsp">TTSP</option>
                                <option value="cfsp">CFSP</option>
                                <option value="uaqtea">UAQTEA</option>
                                <option value="twsp">TWSP</option>
                              </select>
                            </div>
                          )}

                          {trainingStatus4 === "non-scholar" && (
                            <div className="mb-3">
                              <label className="block text-gray-700">Non Scholarship Type 4:</label>
                              <select name="type_of_scholar4" defaultValue="" className="mt-1 p-2 border rounded-lg w-full">
                                <option value="" disabled>
                                  Select your non scholarship type 4
                                </option>
                                <option value="walk-in">Walk-In</option>
                                <option value="CAWS">CAWS</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                              </select>
                            </div>
                          )}
                        </div>
                      )}

                   {/* Button to add additional qualification sections */}
<button
  type="button"
  onClick={handleAddQualification}
  className={`mt-4 px-4 py-2 rounded-lg ${
    showQualification4
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-green-500 text-white hover:bg-green-600"
  }`}
  disabled={showQualification4}
>
  {showQualification4 ? "You have reached the maximum limit" : "Add Another Qualification"}
</button>

                      <div className="mt-4">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox text-blue-500"
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                          />
                          <span className="ml-2 text-gray-700">I agree to proceed to the next step</span>
                        </label>
                      </div>

                      <button
                        type="button"
                        disabled={!isChecked}
                        onClick={() => setStep(2)}
                        className={`mt-4 px-4 py-2 rounded-lg text-white ${
                          isChecked ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      {/* {[...Array(8)].map((_, index) => (
                        <div key={index} className="mb-3">
                          <label className="block text-gray-700">Upload File {index + 5}:</label>
                          <input type="file" name={`file${index + 5}`} className="mt-1 p-2 border rounded-lg w-full" />
                        </div>
                      ))} */}
    
    <div id="qualificationTitle" className="mt-4 text-lg font-semibold text-gray-800">
        <h2>
          {selectedQualification
            ? `Provide PDF for ${selectedQualification}`
            : "Please upload your document here (PDF)"}
        </h2>
      </div>
  

<div className="p-4 flex flex-col lg:flex-row gap-6">
  {/* Form Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-4">
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Endorsement Letter To TESDA:</label>
      <input
        type="file"
        name="ellt" 
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange}
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Request Form For Test Package:</label>
      <input
        type="file"
        name="rfftp"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange}
      />
    </div>

    {trainingStatus === "non-scholar" && (
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Official Receipt of Payment for Assessment for Non-Scholar:</label>
      <input
        type="file"
        name="oropfafns"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange}
      />
    </div>
  )}

    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Submission of Previous CCTV Recordings:</label>
      <input
        type="file"
        name="sopcctvr"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange}
      />
    </div>
  </div>
  

  {/* PDF Preview Section */}
  <div className="w-full lg:w-1/2 p-4 bg-blue-500 shadow-md rounded-lg">
  <h2 className="text-lg font-semibold text-white mb-2">PDF Preview Here:</h2>
  {pdfFile && (
      <embed
        src={pdfFile}
        type="application/pdf"
        className="w-full h-[400px] lg:h-[330px] border rounded-lg"
      />
   
  )}
    </div>
</div>



<div id="qualificationTitle2" className="mt-4 text-lg font-semibold text-gray-800">
        <h2>
          {selectedQualification2
            ? `Provide PDF for ${selectedQualification2}`
            : "Please upload your document here (PDF)"}
        </h2>
      </div>
  

<div className="p-4 flex flex-col lg:flex-row gap-6">
  {/* Form Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-4">
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Endorsement Letter To TESDA 2:</label>
      <input
        type="file"
        name="ellt2"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange2}
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Request Form For Test Package 2:</label>
      <input
        type="file"
        name="rfftp2"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange2}
      />
    </div>

    {trainingStatus2 === "non-scholar" && (
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Official Receipt of Payment for Assessment for Non-Scholar 2:</label>
      <input
        type="file"
        name="oropfafns2"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange2}
      />
    </div>
  )}

    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Submission of Previous CCTV Recordings 2:</label>
      <input
        type="file"
        name="sopcctvr2"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange2}
      />
    </div>
  </div>
  

  {/* PDF Preview Section */}
  <div className="w-full lg:w-1/2 p-4 bg-blue-500 shadow-md rounded-lg">
  <h2 className="text-lg font-semibold text-white mb-2">PDF Preview Here 2:</h2>
  {pdfFile2 && (
      <embed
        src={pdfFile2}
        type="application/pdf"
        className="w-full h-[400px] lg:h-[330px] border rounded-lg"
      />
   
  )}
    </div>
</div>

<div id="qualificationTitle3" className="mt-4 text-lg font-semibold text-gray-800">
        <h2>
          {selectedQualification3
            ? `Provide PDF for ${selectedQualification3}`
            : "Please upload your document here (PDF)"}
        </h2>
      </div>
  

<div className="p-4 flex flex-col lg:flex-row gap-6">
  {/* Form Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-4">
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Endorsement Letter To TESDA 3:</label>
      <input
        type="file"
        name="ellt3"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange3}
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Request Form For Test Package 3:</label>
      <input
        type="file"
        name="rfftp3"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange3}
      />
    </div>

    {trainingStatus3 === "non-scholar" && (
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Official Receipt of Payment for Assessment for Non-Scholar 3:</label>
      <input
        type="file"
        name="oropfafns3"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange3}
      />
    </div>
  )}

    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Submission of Previous CCTV Recordings 3:</label>
      <input
        type="file"
        name="sopcctvr3"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange3}
      />
    </div>
  </div>
  

  {/* PDF Preview Section */}
  <div className="w-full lg:w-1/2 p-4 bg-blue-500 shadow-md rounded-lg">
  <h2 className="text-lg font-semibold text-white mb-2">PDF Preview Here 3:</h2>
  {pdfFile3 && (
      <embed
        src={pdfFile3}
        type="application/pdf"
        className="w-full h-[400px] lg:h-[330px] border rounded-lg"
      />
   
  )}
    </div>
</div>

<div id="qualificationTitle4" className="mt-4 text-lg font-semibold text-gray-800">
        <h2>
          {selectedQualification4
            ? `Provide PDF for ${selectedQualification4}`
            : "Please upload your document here (PDF)"}
        </h2>
      </div>
  

<div className="p-4 flex flex-col lg:flex-row gap-6">
  {/* Form Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-4">
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Endorsement Letter To TESDA 4t:</label>
      <input
        type="file"
        name="ellt4"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange4}
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Request Form For Test Package 4:</label>
      <input
        type="file"
        name="rfftp4"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange4}
      />
    </div>

    {trainingStatus4 === "non-scholar" && (
    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Official Receipt of Payment for Assessment for Non-Scholar 4:</label>
      <input
        type="file"
        name="oropfafns4"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange4}
      />
    </div>
    )}


    <div className="flex flex-col">
      <label className="block text-gray-700 mb-1">Submission of Previous CCTV Recordings 4:</label>
      <input
        type="file"
        name="sopcctvr4"
        accept="application/pdf"
        className="p-2 border rounded-lg w-full"
        onChange={handleFileChange4}
      />
    </div>
  </div>
  

  {/* PDF Preview Section */}
  <div className="w-full lg:w-1/2 p-4 bg-blue-500 shadow-md rounded-lg">
  <h2 className="text-lg font-semibold text-white mb-2">PDF Preview Here 4:</h2>
  {pdfFile4 && (
      <embed
        src={pdfFile4}
        type="application/pdf"
        className="w-full h-[400px] lg:h-[330px] border rounded-lg"
      />
   
  )}
    </div>
</div>

  

  


                      <div className="flex justify-between mt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                        >
                          Back
                        </button>
                        <PrimaryButton
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" disabled={processing}
                        >
                          Submit
                        </PrimaryButton>
                      </div>
                    </div>
                  )}
                </form>

              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </AuthenticatedLayout>
  );
}
