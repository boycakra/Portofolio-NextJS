const Data = [
  {
    Title: "Indonesia Biru Foundation",
    tech: "mobile android application, firebase auth, firebase database, Java mobile development",
    Deskripsi: "Developed Android app for diving spots in Lombok region, promoting marine conservation and boosting diving tourism.",
    Image: "/images/experience/ibf.png"
  },
  {
    Title: "CV.Mina Karya Madani",
    tech: "Python, PySpark, ReactJS, Html, Css, etc. (Data Analysis - FrontEnd )",
    Deskripsi: "Developed a tool for recording item sales, purchases, transactions, and order management. Contributed to applications for CV.Mina Karya Madani",
    Image: "/images/experience/Minakarya.JPG"
  },
  {
    "Title": "Indonesia Biru Foundation",
    "tech": "TypeScript, Css, Web development",
    "Deskripsi": "Managed web company profile and content on the website https://indonesiabiru.id.",
    "Image": "/images/experience/ibf.png"
  }, 
];

export default function AllJob() {
  return (
    <div className=" dark:bg-cus-blue mt-5">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">

      <div className="pb-5 border border-cus-blue-100 dark:border-gray-200 ">
        <h3 className="text-lg leading-5 font-medium text-black dark:text-white text-center pt-5">
          Job Postings
        </h3>
      </div>
        </div>

      {Data.map((data, index) => {
        if (index % 2 == 1) {
          return (
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8" key={index}>
              <div className="dark:bg-cus-blue-100 bg-sky-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 ">
                <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 ">
                  <div className="lg:self-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      <span className="block">{data?.Title}</span>
                      <span className="block text-xl pt-4">Tech Stack : {data?.tech}</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-white">
                      {data?.Deskripsi}
                    </p>
                    {/* <a
                      href="#"
                      className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-black hover:bg-indigo-50"
                    >
                      Sign up for free
                    </a> */}
                  </div>
                </div>
                <div className=" aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 my-auto">
                  <img
                    className="transform  rounded-md object-cover object-left-top my-auto"
                    src={data?.Image}
                    alt="Images"
                  />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8"  key={index}>
              <div className="dark:bg-cus-blue-200 bg-indigo-600 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 ">
                <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 ">
                  <div className="lg:self-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                      <span className="block">{data?.Title}</span>
                      <span className="block text-xl pt-4">Tech Stack :  {data?.tech}</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-white">
                      {data?.Deskripsi}
                    </p>
        
                  </div>
                </div>
                <div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 my-auto">
                  <img
                    className="transform  rounded-md object-cover object-left-top my-auto"
                    src={data?.Image}
                    alt="Images"
                  />
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
