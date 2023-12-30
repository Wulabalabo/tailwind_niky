import Image from 'next/image'
import { Hero, CustomerReviews, Footer, PopularProducts,Services,SpecialOffers,Subscribe,SuperQuality } from './components/sections';
import Nav from './components/Nav';

export default function Home() {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding"><SuperQuality/></section>
      <section className="padding"><Services/></section>
      <section className="padding-x py-10"><SpecialOffers/></section>
      <section className="bg-pale-blue padding"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
      <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
    </main>
  );
}
