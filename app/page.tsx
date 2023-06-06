import Image from 'next/image'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <section className='bgimage grid items-center'>
        <div className='container mx-auto'>
          <p className=' text-white font-extrabold text-7xl text-center my-64'>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
        </div>
      </section>
      {/* CARDS */}
      <section className='flex'>
        {/*
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4'>
          <div className='bg-restauran text-white text-center pt-12 px-8 flex flex-col justify-center'>
            <p className='font-bold text-xl mb-6'>Pressreleases</p>
            <div>
              <p className=' font-normal'>July 10, 2017</p>
              <p className=' font-bold'>PM 1 lorem ipsum dolor sit </p>
            </div>
            <button className='mt-12 bg-white text-restauran font-bold mx-4 w-full'>Lorem ipsum</button>
          </div>
        </div>
        */}
        <div className="grid mb-8 lg:mb-2 md:grid-cols-2 lg:grid-cols-4">

            <figure className="flex flex-col items-center justify-center p-4 text-center bg-restauran text-white">
                <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
                    <h3 className="text-2xl font-semibold">Pressreleases</h3>
                </blockquote>
                <figcaption className="flex flex-col items-center justify-center space-x-3">
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 1 lorem ipsum dolor sit </p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 2 lorem ipsum dolor lorem ipsum sit amet Lorem ipsum.</p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 3 lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 3 lorem ipsum dolor sit amet</p>
                  </div>
                  <button className='mt-12 p-1 rounded-lg bg-white text-restauran font-bold w-full'>Lorem ipsum</button>
                </figcaption>    
            </figure>

            <figure className="flex flex-col items-center justify-center p-4 text-center bg-ygg text-white">
                <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
                    <h3 className="text-2xl font-semibold">Calendar</h3>
                </blockquote>
                <figcaption className="flex flex-col items-center justify-center space-x-3">
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 1 lorem ipsum dolor sit </p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 2 lorem ipsum dolor lorem ipsum sit amet Lorem ipsum.</p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 3 lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 3 lorem ipsum dolor sit amet</p>
                  </div>
                  <button className='mt-12 p-1 rounded-lg bg-white text-ygg font-bold w-full'>Lorem ipsum</button>
                </figcaption>    
            </figure>

            <figure className="flex flex-col items-center justify-center p-4 text-center bg-comeon text-white">
                <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
                    <h3 className="text-2xl font-semibold">Cherry Interrim Report</h3>
                </blockquote>
                <figcaption className="flex flex-col items-center justify-center space-x-3">
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 1 lorem ipsum dolor sit </p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 2 lorem ipsum dolor lorem ipsum sit amet Lorem ipsum.</p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 3 lorem ipsum dolor sit amet</p>
                  </div>
                  <div className='my-2'>
                    <p className=' font-normal'>July 10, 2017</p>
                    <p className=' font-bold'>PM 3 lorem ipsum dolor sit amet</p>
                  </div>
                  <button className='mt-12 p-1 rounded-lg bg-white text-comeon font-bold w-full'>Lorem ipsum</button>
                </figcaption>    
            </figure>

            <figure className="flex flex-col items-center justify-center p-4 text-center bg-cherry text-white">
                <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8">
                    <h3 className="text-2xl font-semibold">The Share</h3>
                    <h3 className="text-xl font-semibold">NASDAQ OMXS (CHER B):</h3>
                </blockquote>
                <figcaption className="flex flex-col items-center justify-evenly space-x-3">
                  <p className='text-5xl font-bold'>59.50 SEK</p>
                  <p className='text-5xl font-bold'>+1.75%</p>
                  <button className='mt-12 p-1 rounded-lg bg-white text-cherry font-bold w-full'>Lorem ipsum</button>
                </figcaption>    
            </figure>
        </div>

      </section>
      <section className='container mx-auto flex justify-center flex-col-reverse md:flex-row my-6'>
        <div className='mx-8'>
          <p className='text-3xl font-bold text-cherry my-4'>Lorem ipsum</p>
          <p>Cherry är ett innovativt och snabbväxande spelföretag grundat 1963 vars övergripande strategi är att skapa aktievärde genom att äga och utveckla snabbväxande och lönsamma bolag inom spel och casino.
          Idag bedriver Cherry sin verksamhet genom fem diversifierade affärsområden, Nätspel via Cherry iGaming, Prestationsbaserad Marknadsföring via Game Lounge, Spelteknologi via XCaliber, Spelutveckling via Yggdrasil Gaming och Restaurangcasino via Cherry Spelglädje. 
        Bolagets målsättning är att växa organiskt och genom strategiska förvärv av snabbväxande företag. Cherry sysselsätter cirka 900 personer och har drygt 4 600 aktieägare. Bolagets B-aktie är listad på AktieTorget.</p>
          <button className='bg-cherry text-white py-1 px-8 my-4 rounded-md'>Lorem ipsum</button>
        </div>
          <Image className=' self-center' src={'/02_hero_pencil_3.png'} width='250' height='0' alt={''}  />
        
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        <div className='bg-comeon bg-opacity-20 py-4 px-14'>
          <h1 className='text-comeon font-bold text-3xl'>Online Gaming</h1>
          <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Donec eget massa a diam condimentum pretium. </p>
        </div>
        <div className='bgimage2 pt-[50%] md:pt-0'></div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        <div className='bgimage3 pt-[50%] md:pt-0'></div>
        <div className='bg-restauran bg-opacity-20 py-4 px-14'>
          <h1 className='text-restauran font-bold text-3xl'>Restaurant Casino</h1>
          <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Donec eget massa a diam condimentum pretium. </p>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        <div className='bg-ygg bg-opacity-20 py-4 px-14'>
          <h1 className='text-ygg font-bold text-3xl'>Game Developement</h1>
          <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Donec eget massa a diam condimentum pretium. </p>
        </div>
        <div className='bgimage3 pt-[50%] md:pt-0'></div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        <div className='bgimage5'></div>
        <div className='bg-gamelounge bg-opacity-20 py-4 px-14'>
          <h1 className='text-gamelounge font-bold text-3xl'>Performance-based Marketing</h1>
          <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Donec eget massa a diam condimentum pretium. </p>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        <div className='bg-greydark bg-opacity-20 py-4 px-14'>
          <h1 className='text-greydark font-bold text-3xl'>Gaming Technology</h1>
          <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Donec eget massa a diam condimentum pretium. </p>
        </div>
        <div className='bgimage6'></div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        <div className='bgimage7'></div>
        <div className='bg-cherry bg-opacity-20 py-4 px-14'>
          <h1 className='text-cherry font-bold text-3xl'>Performance-based Marketing</h1>
          <p>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Donec eget massa a diam condimentum pretium. </p>
        </div>
      </section>
    </div>
  )
}
