const content = document.getElementById('content');
const tap = document.getElementById('tap');

window.addEventListener('load', function () {
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideDua();
    })
  }, 1000);
});

const slideDua = function () {
  const img = document.getElementsByTagName('img')[0];
  setTimeout(function () {
    img.classList.replace('animate__tada', 'animate__rotateOut');
    img.classList.remove('animate__fast', 'animate__infinite');
    tap.classList.add('d-none');
    setTimeout(function () {
      img.remove();
    }, 1000);
  }, 1000);
  const slideDua = document.getElementById('slideDua');
  slideDua.classList.toggle('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideTiga();
    })
  }, 5000);
}

const slideTiga = function () {
  const slideDua = document.getElementById('slideDua');
  setTimeout(function(){
    slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
    slideDua.classList.remove('animate__delay-2s', 'animate__slow');
    tap.classList.add('d-none');
    setTimeout(function () {
      slideDua.remove();
    }, 1000);
  }, 1000);
  const slideTiga = document.getElementById('slideTiga');
  slideTiga.classList.toggle('d-none');
}


new TypeIt("#teks1", {
  strings: ["Assalamualaikum Wr. Wb", " ", "Saya Adam Mukti Wibisono pada hari ini Minggu, 23 Agustus 2020 dengan sepenuh hati mengucapkan", " ", "<b>Selamat Ulang Tahun Yang ke - 21</b>", " ", "Kepada Irna Imroatun, semoga kamu panjang umur, dan bahagia selalu. Aamiin.", "Sekian surat pernyataan dari saya", " ", "Wassalamualakaikum Wr. Wb", " ", "- Adam Mukti, orang ganteng :)"],
  startDelay: 4000,
  speed: 5,
  loop: false,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: ["Haii!!", " ", "Saya Adam Mukti Wibisono pada hari ini Minggu, 23 Agustus 2020 dengan sepenuh hati mengucapkan", " ", "<b>Selamat Ulang Tahun Yang ke - 21</b>", " ", "Kepada Irna Imroatun, semoga kamu panjang umur, dan bahagia selalu. Aamiin.", "Sekian surat pernyataan dari saya", " ", "Wassalamualakaikum Wr. Wb", " ", "- Adam Mukti, orang ganteng :)"],
  startDelay: 4000,
  speed: 5,
  loop: false,
  waitUntilVisible: true
}).go();