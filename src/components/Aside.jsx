export default function Aside({name, onNameChange, email, onEmailChange, course, onCourseChange, phone, onPhoneChange, addStudent}) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-6">
                নতুন ছাত্র/ছাত্রী যোগ করুন
            </h2>

            <div className="space-y-4">

                <div>
                    <label className="block mb-2 font-medium">নাম *</label>
                    <input
                        type="text"
                        placeholder="আপনার নাম লিখুন"
                        className="w-full border p-3 rounded"
                        value={name}
                        onChange={onNameChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">ইমেইল *</label>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full border p-3 rounded"
                        value={email}
                        onChange={onEmailChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">কোর্স *</label>
                    <input
                        type="text"
                        placeholder="যেমন: React, JavaScript, Python"
                        className="w-full border p-3 rounded"
                        value={course}
                        onChange={onCourseChange}
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">ফোন নম্বর *</label>
                    <input
                        type="number"
                        placeholder="01XXXXXXXXX"
                        className="w-full border p-3 rounded"
                        value={phone}
                        onChange={onPhoneChange}
                    />
                </div>

                <button 
                    className="hover:bg-red-400 w-full bg-indigo-600 text-white py-3 rounded font-bold"
                    onClick={addStudent} 
                >
                    যোগ করুন
                </button>

            </div>
        </div>
    );
}
