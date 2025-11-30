export default function Bside({students, deleteStudent}) {
    return (
        <div className="">
            <h2 className="text-xl font-bold mb-6">
                নিবন্ধিত ছাত্র/ছাত্রী ({students.length})
            </h2>

            {students.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">
                    এখনও কোনো ছাত্র/ছাত্রী যোগ করা হয়নি। <br />
                    ফর্ম পূরণ করে প্রথম ছাত্র/ছাত্রী যোগ করুন।
                </p>
            ) : (
                <ul className="space-y-3">
                    {students.map((student, index) => (
                        <li key={index} className="border p-3 rounded flex justify-between items-center">
                            <div>
                                <p><strong>নাম:</strong> {student.name}</p>
                                <p className="text-sm md:text-xl "><strong>ইমেইল:</strong> {student.email}</p>
                                <p><strong>কোর্স:</strong> {student.course}</p>
                                <p><strong>ফোন:</strong> {student.phone}</p>

                             <button 
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => deleteStudent(index)}
                            >
                                Delete
                            </button>
                            </div>
                            
                          
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
