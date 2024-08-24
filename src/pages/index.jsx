import { EllipsisVertical } from "lucide-react";

const Video = () => {
  return (
    <>
      <div className=" max-w-sm min-h-72 flex flex-col">
        <div className="flex-1 relative mb-2">
          <h1 className="absolute bg-slate-700 bottom-0 right-0 m-2 bg-opacity-80 rounded-md p-1 text-xs">
            32:80
          </h1>
          <img
            className="object-cover rounded-2xl"
            src="https://i.ytimg.com/vi/h9yya-j_kjE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgvpLOjCzMWoNiJptjEdKw1szKbg"
            alt="image"
          />
        </div>
        <div className="flex gap-x-2">
          <div>
            <img
              src="https://yt3.ggpht.com/IrAhqWL68416lUtvy225-f2PopdsiCddcmBeSp5odvtkCLhR8VvXgNyHDx2as4KkkRWHEugweg=s88-c-k-c0x00ffffff-no-rj"
              alt=""
              className="rounded-full w-10"
            />
          </div>
          <div className="flex-1 gap-x-2">
            <div className="font-bold">
              {"yorushika but it's lofi ~ lofi to chill/study to"}
            </div>
            <div className="text-slate-400 dark:text-slate-400 text-sm">
              <div>venv</div>
              <div className="flex gap-x-2">
                <h1>258k views</h1> • <h1>7 months ago</h1>
              </div>
            </div>
          </div>
          <div>
            <EllipsisVertical />
          </div>
        </div>
      </div>
    </>
  );
};

const Search = () => {
  return (<>
  {/* <input type="text" className="p-2 rounded-lg dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-blue-500 dark:bg-gray-700" placeholder="search"/> */}
  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm " placeholder="Search Mockups, Logos..." required />
  <input type="text" name="" id="" />
  </>)
}

export const Index = () => {
  return (
    <>
      <div className="flex w-full min-h-screen">
        <div className="border w-48">
          <div>logo</div>
          <div>
            <h1>home</h1>
            <h1>history</h1>
            <h1>playlist</h1>
            <h1>liked</h1>
            <h1>subscription</h1>
          </div>
        </div>

        <main className="border flex-1 flex justify-center">
          <div className="border w-full max-w-7xl p-4">
            <div className="flex justify-between border">
              <Search />
              <div>account</div>
            </div>
            <div className="mt-4">
              {Array.from({ length: 1 }, (_, i) => (
                <Video key={i} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
