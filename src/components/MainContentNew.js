import HeroNew from './HeroNew';
import Cards from './Card';
import cards1 from '../assets/1.jpg';
import cards2 from '../assets/2.jpg';
import cards3 from '../assets/3.jpg';
import CardsKegiatan from './CardsKegiatan';
import Footer from './Footer';


const MainContent = () =>{
    return (
        <div>
            <HeroNew/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center my-5'>
                        <h1>Jurusan Sekolah</h1>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <Cards gambar = {cards1} namaJurusan="TKJ"/>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <Cards gambar = {cards2} namaJurusan="Akuntansi"/>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <Cards gambar = {cards3} namaJurusan="TKR"/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center my-5'>
                        <h1>Kegiatan</h1>
                    </div>
                    <div className='col-12 my-2'>
                        <CardsKegiatan gambar={cards1}/>
                    </div>
                    <div className='col-12 my-2'>
                        <CardsKegiatan gambar={cards2}/>
                    </div>
                    <div className='col-12 my-2'>
                        <CardsKegiatan gambar={cards3}/>
                    </div>
                </div>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    )
    
}
export default MainContent;