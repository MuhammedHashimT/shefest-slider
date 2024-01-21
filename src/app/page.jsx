export default function Home() {
  return (
    <div className="bg-white h-screen w-screen overflow-hidden p-5">
      <img
        src="/vertical-lines.png"
        alt=""
        className="top-0 left-0 w-80 h-screen absolute"
      />
      <div className="flex justify-between items-center">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-64 h-24 z-10 object-contain"
        />
        <div className="text-right">
          <p className="font-black text-3xl">Word Fight English To Arabic</p>
          <p>Aliya Category</p>
        </div>
      </div>
      <div>
        <div className="flex space-between ml-96 mt-16 mr-20 justify-between">
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-3 items-center">
              <div className="font-black bg-yellower w-12 h-12 flex justify-center rounded-full text-white items-center">
                1st
              </div>
              <div className="relative">
                <img
                  src="/avatar.jpg"
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    A Grade
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  CMS903246
                </p>
                <p className="font-bold mt-1">Muhameed Taheed</p>
                <p className="text-sm mb-1 text-gray-800">
                  dfjhsdf ds fdk fjldsk flds jflds flds flds fjd fd
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                  Zone E
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="font-black bg-slate-500 w-12 h-12 flex justify-center rounded-full text-white items-center">
                2nd
              </div>
              <div className="relative">
                <img
                  src="/avatar.jpg"
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    A Grade
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  CMS903246
                </p>
                <p className="font-bold mt-1">Muhameed Taheed</p>
                <p className="text-sm mb-1 text-gray-800">
                  dfjhsdf ds fdk fjldsk flds jflds flds flds fjd fd
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                  Zone E
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="font-black bg-orange w-12 h-12 flex justify-center rounded-full text-white items-center">
                3rd
              </div>
              <div className="relative">
                <img
                  src="/avatar.jpg"
                  alt="image"
                  className="rounded-xl h-28 w-28 object-cover"
                />
                <p className="flex justify-center absolute bottom-0 w-28">
                  
                  <span className="bg-yellow  rounded-t-lg px-2 py-1 text-xs ">
                    A Grade
                  </span>
                </p>
              </div>
              <div>
                <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
                  CMS903246
                </p>
                <p className="font-bold mt-1">Muhameed Taheed</p>
                <p className="text-sm mb-1 text-gray-800">
                  dfjhsdf ds fdk fjldsk flds jflds flds flds fjd fd
                </p>
                <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
                  Zone E
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-amber-100 p-5 rounded-xl">
            <p className="bg-yellow inline rounded-lg px-2 py-1 text-sm">
              CMS903246
            </p>
            <p className="font-bold mt-1">Muhameed Taheed</p>
            <p className="text-sm mb-1 text-gray-800">
              dfjhsdf ds fdk fjldsk flds jflds flds flds fjd fd
            </p>
            <p className="border border-dashed border-yellow text-sm inline rounded-lg p-1">
              Zone E
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
