import Aside from "./Aside.jsx";
import Bside from "./Bside.jsx";
import { useState } from "react";

export default function MainPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [phone, setPhone] = useState("");


  const [students, setStudents] = useState([]);


  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCourseChange = (e) => setCourse(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

 
  const addStudent = () => {
    if (!name || !email || !course || !phone) {
      alert("সব তথ্য পূরণ করুন!");
      return;
    }

    const newStudent = { name, email, course, phone };
    setStudents([...students, newStudent]); 
    setName(""); setEmail(""); setCourse(""); setPhone("");
  };


   const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <h1 className="text-center text-4xl font-extrabold mb-10">
        কোডজগত ছাত্র/ছাত্রী নিবন্ধন ফর্ম
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white shadow-md p-8 rounded-xl">
          <Aside 
            name={name} onNameChange={handleNameChange}
            email={email} onEmailChange={handleEmailChange}
            course={course} onCourseChange={handleCourseChange}
            phone={phone} onPhoneChange={handlePhoneChange}
            addStudent={addStudent} 
          />
        </section>

        <section className="bg-white shadow-md p-8 rounded-xl">
          <Bside students={students} deleteStudent={deleteStudent}  /> {/* students list পাঠানো */}
        </section>
      </div>

      <p className="text-center mt-10 text-gray-600">
        ©copyright 2025 CodeJogot
      </p>
    </div>
  );
}
