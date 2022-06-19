import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaCalendar, FaLanguage, FaMoneyBillWave } from "react-icons/fa";
import { GrCertificate, GrChat, GrMoney } from "react-icons/gr";

function LandingPage() {
    return (
        <>
            <div className="bg-white w-full p-2 h-full">
                <div className="bg-white flex flex-col lg:flex-row justify-center items-center rounded-md p-2 mb-1 text-center">
                    <div className="text-center text-[#2b46ba]">
                        <h1 className="text-3xl font-bold font-sans">Aplikasi No. 1 Mahasiswa & Pelajar</h1>
                    </div>
                </div>
                <div className="flex flex-col p-8 lg:flex lg:flex-row justify-left lg:flex-wrap w-full gap-3 lg:pt-1 items-center justify-center">
                    <Link to={'/category'} className="border-2 mt-6 rounded-xl py-2 w-full lg:w-72 h-[50%] shadow-inner">
                        <div className="flex flex-row h-40 lg:flex-col lg:">
                            <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                                <div className="flex flex-row">
                                    <div className="bg-yellow-400 p-2 rounded-full w-12 ">
                                        <FaBook className="text-[#1c1a4e] text-xl w-8 h-8" />
                                    </div>
                                    <h1 className="text-[#1c1a4e] items-center font-bold text-2xl justify-center my-auto text-center ml-4">Booku</h1>
                                </div>
                                <p className="text-[#1c1a4e] mt-2">
                                    200+ ringkasan non-fiksi untuk perluas wawasanmu di mana pun, kapan pun. Ada versi audio & teks, dalam 2 bahasa!
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div className="border-2 mt-6 rounded-xl py-2 w-full lg:w-72 h-[50%] shadow-inner">
                        <div className="flex flex-row h-40 lg:flex-col lg:">
                            <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                                <div className="flex flex-row">
                                    <div className="bg-yellow-400 p-2 rounded-full w-12 ">
                                        <FaCalendar className="text-[#1c1a4e] text-xl w-8 h-8" />
                                    </div>
                                    <h1 className="text-[#1c1a4e] items-center font-bold text-2xl justify-center my-auto text-center ml-4">Event</h1>
                                </div>
                                <p className="text-[#1c1a4e] mt-2">
                                    Daftar ke 2,000+ event pilihan (webinar, lomba, volunteering, dsb). Kamu bisa upload dan promosi event juga, lho!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 mt-6 rounded-xl py-2 w-full lg:w-72 h-[50%] shadow-inner">
                        <div className="flex flex-row h-40 lg:flex-col lg:">
                            <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                                <div className="flex flex-row">
                                    <div className="bg-yellow-400 p-2 rounded-full w-12 ">
                                        <GrCertificate className="text-[#1c1a4e] font-yellow-400 text-xl w-8 h-8" />
                                    </div>
                                    <h1 className="text-[#1c1a4e] items-center font-bold text-2xl justify-center my-auto text-center ml-4">Sertifikat</h1>
                                </div>
                                <p className="text-[#1c1a4e] mt-2">Simpan semua sertifikatmu di satu tempat. Nggak perlu ribet, nggak akan hilang.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 mt-6 rounded-xl py-2 w-full lg:w-72 h-[50%] shadow-inner">
                        <div className="flex flex-row h-40 lg:flex-col lg:">
                            <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                                <div className="flex flex-row">
                                    <div className="bg-yellow-400 p-2 rounded-full w-12 ">
                                        <GrChat className="text-[#1c1a4e] font-yellow-400 text-xl w-8 h-8" />
                                    </div>
                                    <h1 className="text-[#1c1a4e] items-center font-bold text-2xl justify-center my-auto text-center ml-4">MenFezz</h1>
                                </div>
                                <p className="text-[#1c1a4e] mt-2">Tempat buat kamu sharing dan diskusi, tanpa perlu difollback & ga pake antri.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 mt-6 rounded-xl py-2 w-full lg:w-72 h-[50%] shadow-inner">
                        <div className="flex flex-row h-40 lg:flex-col lg:">
                            <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                                <div className="flex flex-row">
                                    <div className="bg-yellow-400 p-2 rounded-full w-12 ">
                                        <FaLanguage className="text-[#1c1a4e] font-yellow-400 text-xl w-8 h-8" />
                                    </div>
                                    <h1 className="text-[#1c1a4e] items-center font-bold text-2xl justify-center my-auto text-center ml-4">Translation</h1>
                                </div>
                                <p className="text-[#1c1a4e] mt-2">Butuh terjemahan untuk jurnal, abstrak, atau surat rekomendasi? Kami siap memberikan yang terbaik!</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 mt-6 rounded-xl py-2 w-full lg:w-72 h-[50%] shadow-inner">
                        <div className="flex flex-row h-40 lg:flex-col lg:">
                            <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                                <div className="flex flex-row">
                                    <div className="bg-yellow-400 p-2 rounded-full w-12 ">
                                        <FaMoneyBillWave className="text-[#1c1a4e] font-yellow-400 text-xl w-8 h-8" />
                                    </div>
                                    <h1 className="text-[#1c1a4e] items-center font-bold text-2xl justify-center my-auto text-center ml-4">Referral</h1>
                                </div>
                                <p className="text-[#1c1a4e] mt-2">Ajak teman gabung di SejutaCita dan dapatkan bonus hingga Rp9.360.000!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
