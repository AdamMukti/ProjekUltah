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
  const slideDua = document.getElementById('slideDua');

  setTimeout(function () {
    img.classList.replace('animate__tada', 'animate__rotateOut');
    img.classList.remove('animate__fast', 'animate__infinite');
    tap.classList.add('d-none');
    setTimeout(function () {
      img.classList.add('d-none');
    }, 1000);
  }, 1000);

  setTimeout(function () {
    slideDua.classList.remove('d-none');
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideDua.classList.replace('animate__zoomInDown', 'animate__rollOut');
      slideDua.classList.remove('animate__delay-2s', 'animate__slow');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideDua.remove();
      }, 1000);
      _slideTiga()
    })
  }, 1000); //40
}

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  setTimeout(function () {
    slideTiga.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      setTimeout(function () {
        // slideTiga.classList.add('d-none');
        tap.classList.add('d-none');
      }, 1000);
      _slideEmpat();
    })
  }, 1000); //40

}

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');
  const btn = document.getElementsByTagName('button');
  const btnSuka = document.getElementById('suka');
  slideEmpat.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideEmpat);
    console.log(xy[0]);
    slideEmpat.style.top = 0;
    slideEmpat.style.top = xy[0] + 'px';
    // slideEmpat.style.left = xy[1] + 'px';
  });

  btnSuka.addEventListener('click', function () {
    setTimeout(function () {
      document.body.addEventListener('click', function () {
        slideEmpat.classList.replace('animate__fadeInTopLeft', 'animate__fadeOut');
        setTimeout(function () {
          slideEmpat.remove()
        }, 1000);
        _slideLima();
      })
    }, 1000); //40
  })
}

const _slideLima = function() {
  const slideLima = document.getElementById('slideLima');
  const trims = document.getElementsByTagName('trims');
  slideLima.classList.remove('d-none');
  
  setTimeout(() => {
    slideLima.classList.add('d-none');
    setTimeout(() => {
      trims.classList.remove('d-none');
    }, 1000);
  }, 2000);

}


new TypeIt("#teks1", {
  strings: ["Assalamualaikum Wr. Wb", " ", "Saya Adam Mukti Wibisono pada hari ini Minggu, 23 Agustus 2020 dengan sepenuh hati mengucapkan", " ", "<b>Selamat Ulang Tahun Yang ke - 21</b>", " ", "Kepada Irna Imroatun, semoga kamu panjang umur, dan bahagia selalu. Aamiin. Sekian surat pernyataan dari saya", , " ", "Wassalamualakaikum Wr. Wb", " ", "- Adam Mukti, Mas ganteng :)"],
  startDelay: 4000,
  speed: 5,
  loop: false,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: ["Haii cabi!!", "Happy Birthday ya..", " ", "Ciie udah 21 tahun, padahal baru aja beberapa hari kemarin umur kita sama hehe, semoga di umur yang sekarang kamu bisa jadi pribadi yang lebih baik lagi, lebih rajin, lebih sholehah, dan lebih berbakti.", "Maaf ya aku gabisa kasih surprise yang romantis. Cuma ini yang bisa aku kasih ke kamu, aku harap kamu suka ya :)", "Sekali lagi, Selamat Ulang Tahun ya. Semoga semua impian, keinginan, dan harapan kamu bisa tercapai, Aamiin."],
  speed: 50,
  waitUntilVisible: true
}).go();


new TypeIt("#trims", {
  strings: ["Terimakasih."],
  startDelay: 4000,
  speed: 105,
  loop: false,
  waitUntilVisible: true
}).go();
