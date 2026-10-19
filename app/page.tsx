import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div>
      <h1 className="mt-20 text-[30px] md:text-[50px] 2xl:text-[100px] text-center font-yuji">
        Shuren - 修錬
      </h1>
      <h2 className="text-[20px] md:text-[40px] 2xl:text-[80px] text-center font-yuji">
        形容詞
      </h2>
      <h3 className="text-[20px] 2xl:text-[40px] text-center">
        일본어 형용사 학습
      </h3>
      <div
        className="w-[90%] md:w-[50%] 2xl:w-[30%] mt-5 md:mt-20 mx-auto flex flex-col items-center justify-center gap-2 md:gap-4"
      >
        <a href="/dashboard" className="w-full">
          <Button
            type="button"
            className="w-full bg-green-500 font-bold"
          >
            시작하기
          </Button>
        </a>
      </div>
    </div>
  );
}