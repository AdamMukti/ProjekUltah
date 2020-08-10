const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];

const createTap = function () {
  const tap = document.createElement('h5');
  const tapLabel = document.createTextNode('Ketuk untuk melanjutkan');
  tap.appendChild(tapLabel);
  tap.classList.add('animate__animated', 'animate__pulse', 'text-white');
  tap.setAttribute('id', 'tap');
  content.insertBefore(tap, footer);
}

window.addEventListener('load', function () {
  setTimeout(function () {
    createTap();
    document.body.addEventListener('click', function () {
      _slideDua();
    })
  }, 1000);
});

const _slideDua = function () {
  const img = document.getElementsByTagName('img')[0];
  const tap = document.getElementById('tap');

  setTimeout(function () {
    img.classList.replace('animate__tada', 'animate__rotateOut');
    img.classList.remove('animate__fast', 'animate__infinite');
    tap.classList.toggle('d-none');
    setTimeout(function () {
      img.remove()
    }, 1000);
  }, 1000);

  const slideDua = document.getElementById('slideDua');
  slideDua.classList.toggle('d-none');

  setTimeout(function () {
    tap.classList.toggle('d-none');
    document.body.addEventListener('click', function () {
      setTimeout(function () {
        slideDua.classList.replace('animate__zoomInDown', 'animate__rollOut');
        slideDua.classList.remove('animate__delay-2s', 'animate__slow');
        tap.classList.toggle('d-none');
      }, 2000);

      _slideTiga()
    })
  }, 1000); //40
}

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');
  slideTiga.classList.toggle('d-none');
  setTimeout(function () {
    tap.classList.toggle('d-none');
    document.body.addEventListener('click', function () {
      alert('ok');
    })
  }, 1000);
}


new TypeIt("#teks1", {
  strings: ["Assalamualaikum Wr. Wb", " ", "Saya Adam Mukti Wibisono pada hari ini Minggu, 23 Agustus 2020 dengan sepenuh hati mengucapkan", " ", "<b>Selamat Ulang Tahun Yang ke - 21</b>", " ", "Kepada Irna Imroatun, semoga kamu panjang umur, dan bahagia selalu. Aamiin.", "Sekian surat pernyataan dari saya", " ", "Wassalamualakaikum Wr. Wb", " ", "- Adam Mukti, Mas ganteng :)"],
  startDelay: 4000,
  speed: 5,
  loop: false,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: ["Haii cabi!!", "Happy Birthday ya..", "Semoga panjang umur dan bahagia selalu deh pokoknya", "Wish you all the best ya cabiii ", " ", "Ciie udah 21 tahun, padahal baru aja beberapa hari kemarin umur kita sama hehe, tapi gapapa semoga di umur yang sekarang kamu bisa jadi pribadi yang lebih baik lagi, lebih rajin, lebih sholehah, dan lebih berbakti sama orang tua.", "Maaf ya aku gabisa kasih surprise yang romantis. Cuma ini yang bisa aku kasih ke kamu, aku harap kamu suka ya :)", "Sekali lagi, Selamat Ulang Tahun ya. Semoga semua impian, keinginan, dan harapan kamu bisa tercapai, Aamiin."],
  startDelay: 4000,
  speed: 5,
  loop: false,
  waitUntilVisible: true
}).go();