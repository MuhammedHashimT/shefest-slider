export default function Home() {
  return (
    <div className="bg-white flex h-screen w-screen overflow-hidden">
      <div className="w-80 h-screen flex justify-center items-center ml-10">
        <img src="/vertical-lines.png" alt="" className="w-80 h-screen absolute" />
        <div className="w-52 h-52 rounded-full bg-white z-10 flex items-center justify-center">
          <img src="/logo.svg" alt=" " className="w-40" />
        </div>
      </div>

      <div className="flex-col justify-center items-center ml-10 w-full p-10 z-10">
        <div className="text-center">
          <div className="flex justify-center">
            <span className="font-bold bg-yellower px-3 min-w-12 h-8  flex justify-center rounded-full text-white items-center">
              AA3sw
            </span>
          </div>
          <p className="font-black text-3xl">Word Fight English To Arabic</p>
          <p>Aliya Category</p>
        </div>
        <div className="flex space-between justify-between mt-10 items-center ">
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
