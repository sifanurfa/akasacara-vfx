import React from 'react'
import Image from 'next/image'
import ArticleCard from "@/components/film/announcement/ArticleCard";

type ArticleProps = {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
};

const announcements = [
    {
      id: 1,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/darah_nyai_2.png",
      link: "#",
    },
    {
      id: 2,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/darah_nyai_2.png",
      link: "#",
    },
    {
      id: 3,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/darah_nyai_2.png",
      link: "#",
    },
    {
      id: 4,
      title:
        "Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025",
      date: "21 Januari 2025",
      image: "/assets/darah_nyai_2.png",
      link: "#",
    },
]

function article({ id, title, date, image }: ArticleProps) {
  return (
    <div className="flex flex-col pb-section items-start">
      <div className="relative items-start self-stretch aspect-video">
        <Image
          src="/assets/darah_nyai_2.png"
          alt="gambar"
          fill
          className="object-cover"
        />      
      </div>
      <div className="flex flex-col pt-section px-container justify-center items-start gap-m self-stretch">
          <p className="headline-1 aka-text-title">Menyakiti Laut dan Saatnya Penghakiman: Film Horor Darah Nyai Tayang Serempak 21 Agustus 2025</p>
          <p className="sub-heading-reg self-stretch aka-text-subtitle-2">21 Juli 2025</p>
      </div>
      <div className="py-section px-container flex flex-col gap-[20] justify-center items-center self-stretch sub-heading-reg aka-text-title text-justify">
        <span>Suara.com - Darah Nyai produksi Imaginarium Pictures dan Akasacara akan mulai tayang di bioskop pada 21 Agustus 2025. Film ini mengusung genre khas Horor Jagal Mistis (Mystic-Slasher) berdasar legenda Nyai Roro Kidul dari Laut Selatan.</span>
        <span>Memang sebuah tantangan tersendiri, memproduksi film horor di tengah begitu padatnya produksi dan penayangan film Indonesia bergenre horor. Di satu sisi, bagaimana supaya film ini tidak jadi sekadar latah. Di sisi lain, bagaimana agar film ini tidak asal beda juga, abai pada kegairahan menonton horor di negeri ini.</span>
        <span>Pendekatan kami di Imaginarium Pictures dan tim kreatif Darah Nyai adalah dengan menggabungkan moda produksi film B dengan tampilan (looks) seperti film-film B dari Indonesia dan Hongkong pada 1990-an dan film Giallo Italia 1970-an yang brutal dan penuh warna-warni kontras yang kuat, dengan cara produksi dan isu kekinian.</span>
        <span>Kami berangkat dari kecintaan yang keras kepala pada medium film dan genre horor, memilih subgenre yang jarang diproduksi di Indonesia, yakni jagal mistik atau mystic-slasher (dengan fokus pada torture atau penyiksaan), sekaligus keinginan mengajak penonton bersenang-senang bersama, memuaskan kebutuhan pelepasan terhadap berbagai ketidakadilan yang kini terjadi di dunia kita.</span>
      </div>
      <div className="px-container w-full">
        <div className="flex flex-col items-start self-stretch aspect-video relative">
          <Image
            src="/assets/darah_nyai_2.png"
            alt="gambar"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="py-section px-container flex flex-col gap-[20] justify-center items-center self-stretch sub-heading-reg aka-text-title text-justify">
        <span>Moda produksi ini memang harus menghadapi banyak sekali keterbatasan. Tapi, ada juga banyak keleluasan dalam berkreasi dan berproduksi. Pilihan warna, gaya dialog, perlakuan kamera, editing, yang tidak melulu gaya “anak sekolahan film” walau jelas didasari pemahaman tentang bagaimana medium film bekerja. Tim kreasi dan tim produksi berproses secara kolektif, banyak masukan dari pemain dan sutradara di lapangan membentuk adegan dan dialog-dialog secara lebih jitu untuk film ini.</span>
        <span>Film Darah Nyai adalah film ketiga Yusron Fuadi (IG @filmtengkorak), yang mencuat karena film Tengkorak, Setan Alas! (The Draft), dan sedang menanti tayang film keempat, The Verdict/The Judgement. Ditulis oleh sutradara film-film cult, Azzam Firullah bersama Hikmat Darmawan, diproduseri Steve Wirawan, Rayner Wijaya. Dibintangi antara lain oleh Violla Georgie, Jessica Katharina, Rory Asyari, Vonny Anggraini, Nai Djenar Maisa Ayu.</span>
        <span>Film ini menyegarkan kembali legenda dan genre jagal mistik dengan visualisasi 90-an yang dikontemporerkan, membawa isu-isu terkini seperti perdagangan manusia (Human Trafficking) dan Eco-Horror (Horor Ekologis), korupsi, dan kekerasan terhadap perempuan (Femisida).</span>
        <span>Darah Nyai akan tayang di berbagai kota Indonesia. Walau diputar juga di Jakarta, kami memusatkan perhatian pada penayangan di luar Jakarta seperti Karawang, Bekasi, Yogyakarta, Surabaya, Probolinggo, Cibadak, Pekalongan, Klaten, Ungaran, Sukabumi, Cianjur, Subang, Indramayu, Pemalang, Salatiga, Gombong, Solo, Kediri, Nganjuk, Pasuruan, Cilacap, Kroya, Purwodadi, Brebes, Kudus, Demak, Rembang, Wonosobo, Sengkang, Purwokerto, Kediri, Tulung Agung, Bangka Belitung, Lampung, Denpasar, Pekanbaru, Mataram, Manado, Kotabaru, Poso dan seterusnya.</span>
      </div>
      <div className="py-section px-container flex flex-col items-start gap-xl self-stretch">
        <div className="headline-2 aka-text-title self-stretch">Latest Announcements</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-m gap-y-l'>
            {announcements.map((item) => 
            <ArticleCard
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
            />
            )}
        </div>
      </div>
    </div>
  )
}

export default article