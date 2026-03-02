
import PreciosClientFetcher from './PreciosClientFetcher';
import ImageScroll from './imagescroll';
import preciosCover from '/public/images/preciosCover.jpg';
import preciosIcon from '/public/images/preciosIcon.svg';

export const metadata = {
    title: 'Precios'
}



export default function quienessomos() {
    return (
        <main className="">

            <section className="mt-16 sm:mt-16 md:mt-16 lg:mt-24 bg-cover bg-center shadow-[rgba(0,0,0,0.6)] shadow-lg" style={{ backgroundImage: `url(${preciosCover.src})` }}>
                <div className=" bg-black bg-opacity-30 w-full mx-auto py-48">
                    <h2 data-aos-once="true" data-aos="fade-down" className=" max-w-screen-lg mx-auto text-center text-white text-opacity-100 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase font-Poppins">Precios</h2>
                    <ImageScroll />
                </div>
            </section>

            <section id="targetSection" className="max-w-screen-lg mx-auto text-center ">
                <PreciosClientFetcher />
            </section>

        </main>
    );
}


