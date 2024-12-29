import Nav from './components/Nav'
import {
  Hero,
  Populer,
  Super,
  Services,
  Offer,
  Review,
  Subscribe,
  Footer,
} from './sections'


const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-x'>
        <Hero />
      </section>
      <section className='padding'>
        <Populer />
      </section>
      <section className='padding'>
        <Super />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <Offer />
      </section>
      <section className='bg-pale-blue padding'>
        <Review />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App
