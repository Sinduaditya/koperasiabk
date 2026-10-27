# DESAIN: Koperasi Anak Bina Karya

## Identitas
Koperasi rumahan yang mendampingi anak berkebutuhan khusus (ABK) di Tangerang Selatan.
Nada: hangat, lugas, gotong royong. Bukan perusahaan besar, bukan nada institusional.
Terasa seperti kerajinan yang dikerjakan dengan tangan sendiri.

## Design Read
Membaca ini sebagai: profil koperasi sosial untuk pembeli dan calon mitra di Tangerang
Selatan, dengan bahasa visual "kertas kraft dan label kemasan", dial ENERGY 2 / RHYTHM 2 / MOTION 2.

## Palet (maksimal 3 warna inti + 1 aksen)
| Peran | Nilai | Alasan |
|---|---|---|
| Kertas (latar) | `#faf6f1` | Warna kertas kraft. Identitas: produk dikerjakan tangan dari bahan sederhana. |
| Tinta (teks) | `#2b1f1b` | Cokelat kehitaman seperti tinta pada label kemasan. |
| Terakota (aksen) | `#b83d09` | Warna tanah liat pada vas anyaman. Dipakai hanya pada CTA, nomor langkah, satu garis aksen, dan tautan. Bukan warna glow. Digelapkan dari `#c2410c` agar teks kecil tetap lolos WCAG AA (4.5:1) di atas permukaan `--kertas-2`. |
| Bata (blok penutup) | `#8e1010` | Turunan merah dari logo, dipakai sekali pada blok ajakan di akhir halaman. |

Netral (hitam, putih, abu) tidak dihitung sebagai warna inti.
Nilai kontras terverifikasi: tinta/kertas 14.9, tinta2/kertas 6.7, terakota/kertas 5.3,
terakota/kertas2 4.7, putih/terakota 5.7, putih/bata 9.4.

## Tipografi
- **Display/heading**: `Bricolage Grotesque` 700. Alasan: grotesk variable yang punya
  karakter "dibuat tangan" tanpa jatuh ke bentuk geometris yang dingin. Dipakai untuk H1/H2.
- **Body**: `Atkinson Hyperlegible` 400/700. Alasan: dirancang untuk keterbacaan tinggi
  (dipakai di ranah low-vision). Cocok untuk situs yang dibaca keluarga ABK, termasuk orang
  tua yang membaca di layar kecil.
- Angka dan nomor langkah memakai Bricolage tebal; tidak perlu font mono tambahan.

## Radius dan Border
- Radius kecil yang konsisten: `4px` (kartu dan foto), `8px` (tombol), `999px` hanya pada
  chip kategori produk yang memang berbentuk label.
- Border tipis `1px` cokelat pucat, bukan abu-abu netral.

## Motif Identitas
1. **Garis jahitan** (`.jahitan`): garis putus-putus terakota sebagai pembatas bagian.
   Mengacu pada jahitan kain pada produk bunga kain. Dipakai sebagai pembatas, bukan dekorasi.
2. **Label poligon**: tag kategori produk memakai bentuk sudut terpotong, konsisten dengan
   label kemasan. Alasan: produk dikemas dan diberi label.
3. **Angka langkah besar**: nomor 01 sampai 04 memakai Bricolage tebal dengan garis penghubung
   terakota, mengacu pada urutan kerja.

## Layout
- Lebar konten `1120px`, sama seperti acuan awal, tidak melebar.
- Asimetri: hero memakai grid `1.05fr / 0.95fr` dengan kolase foto (satu foto lebar, satu
  foto tinggi, dua foto kecil), bukan tiga kartu yang sama.
- Galeri memakai grid 6 kolom dengan lebar yang berbeda per foto, bukan mosaic bento.
- Setiap bagian punya satu fokus. Tidak ada grid kartu identik untuk semua bagian.
- Band `--kertas-2` (kelas `.b2`) dipakai hanya pada dua bagian "pertunjukan"
  (Proses pendampingan dan Galeri) supaya langkah dan foto berdiri di permukaan teduh,
  sementara bagian bacaan tetap di atas kertas dasar. Ini yang memberi ritme, bukan
  sekadar mengganti warna latar setiap bagian.

## Gerak (MOTION 2)
- Hover: transisi `180ms` plus `transform` kecil (tilt/zoom `scale` pada foto).
- Scroll-reveal ringan (fade + `translateY 14px`), sekali saja, lewat `IntersectionObserver`.
- Reveal hanya aktif jika JS jalan (`html.js`), supaya tanpa JS konten tetap terlihat.
- Menghormati `prefers-reduced-motion`.
- Alasan: gerak dipakai untuk menuntun perhatian saat bagian baru masuk layar, bukan mengisi halaman.

## Navigasi
- Navigasi desktop: brand di kiri (tidak boleh menyusut, nama satu baris), nav di tengah,
  tombol WhatsApp di kanan. Tinggi header dikunci pada `69px` lewat `--h-hdr`.
- Ambang menu burger `1150px`. Angka ini dari hasil ukur, bukan tebakan: pada `1151px`
  navbar desktop sudah muat satu baris dengan sisa 48px di kiri dan kanan, dan di bawah
  itu nama koperasi terpaksa terpecah jadi beberapa baris.
- Di `320px` sampai `420px`, brand boleh menyusut dan nama boleh turun dua baris supaya
  tombol burger tidak keluar layar. Tinggi header tetap `69px` karena logo 44px yang
  menentukan tinggi barisnya.

## Tema: terang saja (light mode only)
- Situs ini sengaja terang saja. Tombol pengalih tema dan blok `prefers-color-scheme: dark`
  sudah dihapus total dari `index.html`, `assets/style.css`, dan `assets/app.js`, begitu juga
  kunci `localStorage` `abk-tema`.
- `color-scheme: light` dipatok di `:root` supaya kontrol bawaan browser (scrollbar, pemilih
  berkas) tetap ikut terang walaupun sistem pengguna diatur gelap.
- Diuji: dengan `prefers-color-scheme: dark`, latar halaman tetap `#faf6f1` dan kontras tetap 0 pelanggaran.
- Alasan: produk koperasi ini kerajinan tangan berwarna, dan palet kertas kraft adalah
  identitasnya. Mode gelap tidak menambah apa pun untuk audiens ini.

## Aturan Konten
- Tidak ada angka statistik rekaan. Angka yang tampil: 200 ABK (Forkesi Tangsel), 80 ABK
  (Rumah Peduli ABK), 7 kecamatan, 6 direktur, dan nomor badan hukum AHU-0014418AH.01.26
  Tahun 2021 (29 Desember 2021). Semua berasal dari `PROFILE KOPERASI ABK.pptx`.
- Tidak ada testimoni rekaan. Tidak ada logo atau avatar rekaan; logo memakai file asli.
- Nama produk diambil dari template asli dan foto yang memang ada.
- Semua tautan WhatsApp memakai nomor resmi koperasi `6287771659955` (format internasional
  dari 0877-7165-9955). Nomor juga ditulis sebagai teks di bagian kontak dan footer supaya
  bisa dibaca dan disalin tanpa membuka WhatsApp.

## Dials
ENERGY 2 / RHYTHM 2 / MOTION 2
