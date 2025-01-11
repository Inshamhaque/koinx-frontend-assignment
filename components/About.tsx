import Image from "next/image";
import imag1 from "@/public/imag1.png";
import imag2 from "@/public/imag2.png";

export function About() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">About Bitcoin</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">What is Bitcoin?</h3>
          <p className="text-gray-700 mb-2">
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $191.4 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19. 24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
          </p>
          <p className="text-gray-700 mb-4">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus pharetra
            velit in senectus enim dui. Turpis tristique placerat interdum eu
            volutpat.
          </p>
          <p className="text-gray-700">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Already Holding Bitcoin?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-100 rounded-lg flex items-center space-x-4">
              <div className="w-30 h-30 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                <Image
                  src={imag1}
                  alt="Calculate Profits"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Calculate your Profits
                </h4>
                <button className="text-blue-600 font-medium flex items-center">
                  Check Now →
                </button>
              </div>
            </div>

            {/* Tax Liability Card */}
            <div className="p-2 bg-red-100 rounded-lg flex items-center space-x-4">
              <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                <Image
                  src={imag2}
                  alt="Calculate Tax Liability"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Calculate your tax liability
                </h4>
                <button className="text-red-600 font-medium flex items-center">
                  Check Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac.
        </p>
      </div>
    </div>
  );
}
