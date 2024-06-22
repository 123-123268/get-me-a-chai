
export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
      <div className="font-bold text-3xl">GetMeA_Chai</div>
    <p>
      A crowd funding platform for creaters.Get funded by your fans and followers.
    </p>
    <div>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now!</button>
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More!</button>
    </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto py-5">
      <div className="font-bold text-center text-2xl my-6">Get your fundings</div>
      <div className="gifs flex gap-5 justify-around">
        <div className="flex flex-col justify-center items-center space-y-3 items">
        <img src="https://en.pimg.jp/068/243/826/1/68243826.jpg" width={100} className="rounded-3xl p-2"/>
        <p className="font-bold text-center ">Fans want to help</p>
        <p className="text-center">Fans are available for help</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 items">
        <img src="https://t3.ftcdn.net/jpg/01/94/67/20/360_F_194672016_pf5HYgLlm6XlSwuL7JE4Pqvdq0RFqK7V.jpg" width={100} className="rounded-3xl p-2"/>
        <p className="font-bold text-center ">Fans want to help</p>
        <p className="text-center">Fans are available for help</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 items">
        <img src="https://cdn-icons-png.flaticon.com/512/166/166258.png" width={90} className="rounded-3xl p-2"/>
        <p className="font-bold text-center ">Fans want to help</p>
        <p className="text-center">Fans are available for help</p>
        </div>
    </div> 
    </div> 
    </>
  );
}
