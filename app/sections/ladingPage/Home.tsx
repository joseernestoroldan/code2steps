import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative h-[650px] w-full overflow-hidden bg-gray-100">
        <Image
          src="/Portada.png"
          alt="Banner background"
          width={1200}
          height={400}
          className="object-cover object-bottom w-full h-full blur-sm opacity-0 dark:opacity-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <div className="flex justify-center">
              <h3 className={`animate-portada`}>C2S</h3>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <div className="h-[10px] w-[10px] rounded-full bg-sky-900"></div>
              <h1 className="text-4xl font-bold text-sky-900 ">
                <span className="text-sky-900 mb-4 text-center tracking-widest">
                  Code2Steps
                </span>
              </h1>
              <div className="h-[10px] w-[10px] rounded-full bg-sky-900"></div>
            </div>

            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-900 to-emerald-400 text-center">
              Desarrollo Web & Aplicaciones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
