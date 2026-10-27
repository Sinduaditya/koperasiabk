/* =========================================================
   Koperasi Anak Bina Karya: interaksi
   Menu mobile, saring produk, scroll-reveal, sorotan nav.
   Situs terang saja (light mode only), jadi tidak ada logika tema.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Menu mobile ---------- */
  var burger = document.querySelector('[data-burger]');
  var menu = document.getElementById('menu');

  function tutupMenu() {
    if (!menu) return;
    menu.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var buka = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', buka ? 'true' : 'false');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) tutupMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        tutupMenu();
        burger.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1150) tutupMenu();
    });
  }

  /* ---------- Saring produk ---------- */
  var tombolFilter = document.querySelectorAll('[data-filter]');
  var daftar = document.getElementById('daftar-produk');
  var kosong = document.getElementById('produk-kosong');
  var penghitung = document.getElementById('produk-hitung');

  if (tombolFilter.length && daftar) {
    tombolFilter.forEach(function (tombol) {
      tombol.addEventListener('click', function () {
        var kategori = tombol.getAttribute('data-filter');

        tombolFilter.forEach(function (t) {
          t.setAttribute('aria-pressed', t === tombol ? 'true' : 'false');
        });

        var jumlah = 0;
        daftar.querySelectorAll('.produk').forEach(function (item) {
          var cocok = kategori === 'semua' ||
            item.getAttribute('data-kategori') === kategori;
          item.hidden = !cocok;
          if (cocok) jumlah++;
        });

        if (kosong) kosong.hidden = jumlah !== 0;

        /* Beri tahu pembaca layar berapa produk yang tersisa, karena
           menyaring mengubah isi tanpa memindahkan fokus. */
        if (penghitung) {
          penghitung.textContent = jumlah + ' produk ditampilkan' +
            (kategori === 'semua' ? '.' : ' pada kategori ' + kategori + '.');
        }
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var elemenReveal = document.querySelectorAll('.reveal');
  var kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (elemenReveal.length && !kurangiGerak && 'IntersectionObserver' in window) {
    var pengamat = new IntersectionObserver(function (entri) {
      entri.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('tampil');
          pengamat.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elemenReveal.forEach(function (el) { pengamat.observe(el); });
  } else {
    elemenReveal.forEach(function (el) { el.classList.add('tampil'); });
  }

  /* ---------- Sorotan nav sesuai posisi scroll ---------- */
  var tautanNav = Array.prototype.slice.call(
    document.querySelectorAll('nav a[href^="#"]')
  );
  var bagian = tautanNav
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && bagian.length) {
    var sorot = new IntersectionObserver(function (entri) {
      entri.forEach(function (e) {
        if (!e.isIntersecting) return;
        tautanNav.forEach(function (a) {
          a.setAttribute('aria-current',
            a.getAttribute('href') === '#' + e.target.id ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    bagian.forEach(function (b) { sorot.observe(b); });
  }
})();
