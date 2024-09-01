
export default function Home() {
  
  let arr = [];

  for(let i = 0; i <= 500; i++) {
    arr.push(
      <span>
        
          HI

      </span>
    )
  }
  
  return (
    <main className="container flex flex-col">
      
      {
        arr.map((i) => i)
      }

    </main>
  );
}
