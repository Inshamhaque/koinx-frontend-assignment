/* eslint-disable */
import Image from "next/image";

export function Team() {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg pl-3 pr-3 pt-4 pb-4  lg:p-6">
      {/* Title Section */}
      <h2 className="text-2xl font-bold mb-4">Team</h2>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget malesuada integer sit egestas. Proin tempor id pretium quam.
        Facilisis purus convallis quam augue.
      </p>

      {/* Team Members */}
      <div className="space-y-6">
        {[
          {
            name: "John Smith",
            designation: "Software Engineer",
            imageUrl:
              "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=256&h=256",
          },
          {
            name: "William Johnson",
            designation: "Product Manager",
            imageUrl:
              "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=256&h=256",
          },
          {
            name: "Elina Williams",
            designation: "UX Designer",
            imageUrl:
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=256&h=256",
          },
        ].map((member, index) => (
          <div
            key={index}
            className="flex flex-col lg:grid lg:grid-cols-4  items-center lg:flex items-start bg-blue-100 p-4 rounded-lg shadow-md"
          >
            <div className="flex flex-col w-30 h-40 rounded-lg overflow-hidden flex-shrink-1">
              <Image
                src={member.imageUrl}
                alt={`${member.name}'s picture`}
                width={112}
                height={112}
                className="object-cover"
              />
              <h3 className="text-lg flex items-center font-semibold">
                {member.name}
              </h3>
              <p className="text-sm flex items-center text-gray-500">
                {member.designation}
              </p>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-3 ml-4 flex-1">
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
                fermentum ut libero hendrerit id. Tellus sit ornare netus
                sagittis in nunc convallis mattis maecenas.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
