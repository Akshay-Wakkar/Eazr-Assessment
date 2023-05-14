import { useState } from "react"
import DogCard from "../components/DogCard"
import { getRequest } from '../../helpers/requests';
import { v4 as uuidv4 } from "uuid";

export default function Home({ dogList, setDogList }) {
  const initDog = dogList.length > 0 ? dogList[dogList.length - 1] : null
  const [dogInfo, setDogInfo] = useState(initDog)
  const [prevCount, setPrevCount] = useState(dogList.length - 1)
const [loader,setLoader] = useState(false)
  const [error, setError] = useState(null)

  const getImage = async () => {
    let url = "breeds/image/random"
setLoader(true)
    const imageData = await getRequest(url)

    if (imageData.value) {

      let newDog = {
        id: uuidv4(),
        name: (imageData.data.message.split('/')[4].replace("-", " ")),
        url: imageData.data.message
      }
      setDogInfo(newDog)
      setDogList([...dogList, newDog])
      setPrevCount(dogList.length)
      setLoader(false)
      setError(null)
    }else{
      setLoader(false)
      setError("We are out of dogs, please try again later")
    }
  }


  function goBack() {
    if (dogList.length > 0) {
      setPrevCount(prevCount - 1)
      setDogInfo(dogList[prevCount - 1])
    }

  }

  function goForward() {
    if (dogList.length > prevCount) {
      setPrevCount(prevCount + 1)
      setDogInfo(dogList[prevCount + 1])
    }

  }

  return (
    <div className="container mx-auto px-6 py-4 text-center ">
      <div className="mx-auto max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">The best place to find your Perfect Pet!</h1>

        <p className="mt-6 text-gray-500 ">Get yourself a perfect pet from the largest collection of best dogs.</p>

        <div className="mx-auto mt-6 w-full max-w-sm rounded-md shadow-md  bg-transparent">
          <span className="flex flex-col">

            <DogCard key={dogInfo?.id || "init-value"} dogInfo={dogInfo} dogList={dogList} goBack={goBack}
              goForward={goForward} prevCount={prevCount} />

<p className="mt-2 text-red-500 ">{error}</p>
            <button onClick={() => getImage()} type="button" className="m-1 h-10 transform cursor-pointer rounded-md bg-blue-500 px-4 py-2 flex items-center justify-center text-white transition-colors duration-300 focus:outline-none"> {dogInfo ? "Find Next" : "Get Started!"} {loader?
<svg className="inline w-4 h-4 mx-2 text-gray-300 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> : null}</button>
          </span>
        </div>
      </div>
    </div>
  )
}