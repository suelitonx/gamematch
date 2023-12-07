async function getData() {
    const res = await fetch('https://api.adviceslip.com/advice', {next: { revalidate: 1 }})
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Receita1() {

    const data = await getData()



    return (

        <>
        
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
       
       <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[800px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
            

                <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                 Viva Santana!
                </h2>

                {data && <h4 className="mb-3 text-center font-bold text-black dark:text-white">
                 {data.slip.advice}
                </h4>}

              </div>
            </div>
          </div>
        </div>

        
      </section>

        </>
        
        

    )

}