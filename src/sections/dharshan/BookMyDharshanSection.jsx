import { BookMyDharshanForm, Modal } from "@/components";
import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { enquiries, timeSlots } from "@/constants";
// import { MdOutlinePhoneIphone, MdLocalPhone } from "react-icons/md";
// import { BiEnvelope } from "react-icons/bi";

const BookMyDharshanSection = () => {
  const defaultClassNames = getDefaultClassNames();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(selectedDate);
  // console.log(selectedTime);

  const availableDays = [
    new Date(2025, 0, 10),
    new Date(2025, 0, 11),
    new Date(2025, 0, 12),
  ];

  // console.log(availableDays);

  const isAvailable = (date) =>
    availableDays.some(
      (availableDay) =>
        date.getDate() === availableDay.getDate() &&
        date.getMonth() === availableDay.getMonth() &&
        date.getFullYear() === availableDay.getFullYear()
    );

  const handleClose = () => setIsModalOpen(false);
  const handleSubmit = (data) => {
    // console.log("Form Data Submitted:", data);
    setIsModalOpen(false);
  };
  return (
    <div>
      <section className="flex flex-col gap-8 border bg-white py-10">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
              <div className="lg:px-6">
                <h2 className="text-xl font-bold mb-4">Book My Dharshan</h2>
                <p>
                  Take the first step toward spiritual growth and enlightenment.
                  Guruji awaits to guide you on this divine journey. View
                  Guruji’s availability and choose a convenient time for your
                  session.
                </p>
                <p className="my-4">
                  For inquiries or assistance with booking, please contact us:
                </p>
                {/* <div>
                  {enquiries &&
                    enquiries.map((enquiry) => (
                      <p key={enquiry.id} className="flex items-center gap-1 mb-4 ">
                        <span className="text-emerald-600 text-lg">
                          <Icon />
                        </span>
                        <span>+919042557589</span>
                      </p>
                    ))}
                </div> */}
                <div className="space-y-3">
                  {enquiries.map((item) => {
                    const contact = Object.values(item).find(
                      (val) => typeof val === "object"
                    );
                    const { label, value, Icon } = contact;
                    const href =
                      label.toLowerCase() === "email"
                        ? `mailto:${value}`
                        : `tel:${value.replace(/\s+/g, "")}`;

                    return (
                      <div
                        key={item.id}
                        className="flex items-center space-x-2"
                      >
                        <Icon className="text-emerald-600 text-lg" />
                        <a
                          href={href}
                          className="hover:text-blue-500 hover:underline transition-colors"
                        >
                          {value}
                        </a>
                      </div>
                    );
                  })}
                </div>
                {/* <p className="flex items-center gap-1 mb-4 ">
                  <span className="text-emerald-600 text-lg">
                    <MdOutlinePhoneIphone />
                  </span>
                  <span>+919042557589</span>
                </p>
                <p className="flex items-center gap-1 mb-4 ">
                  <span className="text-emerald-600 text-lg">
                    <MdLocalPhone />
                  </span>
                  <span>+91 44-31528443</span>
                </p>
                <p className="flex items-center gap-1 mb-4">
                  <span className="text-emerald-600 text-lg">
                    <BiEnvelope />
                  </span>
                  <span>jaikoshafoundation24@gmail.com</span>
                </p> */}
              </div>
              <div className="w-full">
                <div className="relative mb-6">
                  <h2 className="text-xl font-bold mb-4">Select a Date</h2>
                  {/* <div className="w-full sm:w-min overflow-x-auto"> */}
                  <div className="w-full max-w-[375px] sm:max-w-[350px] overflow-hidden scale-100 max-w-sm:scale-90 transform origin-top-center">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                      }}
                      disabled={[{ before: new Date() }]}
                      modifiers={{
                        available: isAvailable,
                      }}
                      modifiersClassNames={{
                        available:
                          "text-blue-600 bg-blue-200 rounded-full font-semibold",
                      }}
                      classNames={{
                        today: `text-zinc-700 bg-zinc-200 font-semibold rounded-full`,
                        selected: `!bg-emerald-200 text-emerald-600 rounded-full`,
                        root: `${defaultClassNames.root} p-4 rounded-lg shadow-md max-w-full overflow-x-auto bg-zinc-100`,
                        chevron: `!text-black`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  {selectedDate && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">
                        Available Time Slots
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 p-2 md:p-4 w-full md:overflow-auto no-scrollbar bg-zinc-100 rounded-md shadow-md">
                        {timeSlots.map((slot) => (
                          <button
                            className="border border-zinc-300 rounded-md text-black bg-zinc-200 shadow-sm hover:bg-zinc-100 px-2 py-1"
                            key={slot}
                            onClick={() => {
                              setSelectedTime(slot);
                              setIsModalOpen(true);
                            }}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={handleClose}
      >
        <BookMyDharshanForm onClose={handleClose} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default BookMyDharshanSection;
