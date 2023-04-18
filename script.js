function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("#laptop_canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./image_sequence/100001.webp
       ./image_sequence/100002.webp
       ./image_sequence/100003.webp
       ./image_sequence/100004.webp
       ./image_sequence/100005.webp
       ./image_sequence/100006.webp
       ./image_sequence/100007.webp
       ./image_sequence/100008.webp
       ./image_sequence/100009.webp
       ./image_sequence/100010.webp
       ./image_sequence/100011.webp
       ./image_sequence/100012.webp
       ./image_sequence/100013.webp
       ./image_sequence/100014.webp
       ./image_sequence/100015.webp
       ./image_sequence/100016.webp
       ./image_sequence/100017.webp
       ./image_sequence/100018.webp
       ./image_sequence/100019.webp
       ./image_sequence/100020.webp
       ./image_sequence/100021.webp
       ./image_sequence/100022.webp
       ./image_sequence/100023.webp
       ./image_sequence/100024.webp
       ./image_sequence/100025.webp
       ./image_sequence/100026.webp
       ./image_sequence/100027.webp
       ./image_sequence/100028.webp
       ./image_sequence/100029.webp
       ./image_sequence/100030.webp
       ./image_sequence/100031.webp
       ./image_sequence/100032.webp
       ./image_sequence/100033.webp
       ./image_sequence/100034.webp
       ./image_sequence/100035.webp
       ./image_sequence/100036.webp
       ./image_sequence/100037.webp
       ./image_sequence/100038.webp
       ./image_sequence/100039.webp
       ./image_sequence/100040.webp
       ./image_sequence/100041.webp
       ./image_sequence/100042.webp
       ./image_sequence/100043.webp
       ./image_sequence/100044.webp
       ./image_sequence/100045.webp
       ./image_sequence/100046.webp
       ./image_sequence/100047.webp
       ./image_sequence/100048.webp
       ./image_sequence/100049.webp
       ./image_sequence/100050.webp
       ./image_sequence/100051.webp
       ./image_sequence/100052.webp
       ./image_sequence/100053.webp
       ./image_sequence/100054.webp
       ./image_sequence/100055.webp
       ./image_sequence/100056.webp
       ./image_sequence/100057.webp
       ./image_sequence/100058.webp
       ./image_sequence/100059.webp
       ./image_sequence/100060.webp
       ./image_sequence/100061.webp
       ./image_sequence/100062.webp
       ./image_sequence/100063.webp
       ./image_sequence/100064.webp
       ./image_sequence/100065.webp
       ./image_sequence/100066.webp
       ./image_sequence/100067.webp
       ./image_sequence/100068.webp
       ./image_sequence/100069.webp
       ./image_sequence/100070.webp
       ./image_sequence/100071.webp
       ./image_sequence/100072.webp
       ./image_sequence/100073.webp
       ./image_sequence/100074.webp
       ./image_sequence/100075.webp
       ./image_sequence/100076.webp
       ./image_sequence/100078.webp
       ./image_sequence/100079.webp
       ./image_sequence/100080.webp
       ./image_sequence/100081.webp
       ./image_sequence/100082.webp
       ./image_sequence/100083.webp
       ./image_sequence/100084.webp
       ./image_sequence/100085.webp
       ./image_sequence/100086.webp
       ./image_sequence/100087.webp
       ./image_sequence/100088.webp
       ./image_sequence/100089.webp
       ./image_sequence/100090.webp
       ./image_sequence/100091.webp
       ./image_sequence/100092.webp
       ./image_sequence/100093.webp
       ./image_sequence/100094.webp
       ./image_sequence/100095.webp
       ./image_sequence/100096.webp
       ./image_sequence/100097.webp
       ./image_sequence/100098.webp
       ./image_sequence/100099.webp
       ./image_sequence/100100.webp
       ./image_sequence/100101.webp
       ./image_sequence/100102.webp
       ./image_sequence/100103.webp
       ./image_sequence/100104.webp
       ./image_sequence/100105.webp
       ./image_sequence/100106.webp
       ./image_sequence/100107.webp
       ./image_sequence/100108.webp
       ./image_sequence/100109.webp
       ./image_sequence/100110.webp
       ./image_sequence/100111.webp
       ./image_sequence/100112.webp
       ./image_sequence/100113.webp
       ./image_sequence/100114.webp
       ./image_sequence/100115.webp
       ./image_sequence/100116.webp
       ./image_sequence/100117.webp
       ./image_sequence/100118.webp
       ./image_sequence/100119.webp
       ./image_sequence/100120.webp
       ./image_sequence/100121.webp
       ./image_sequence/100122.webp
       ./image_sequence/100123.webp
       ./image_sequence/100124.webp
       ./image_sequence/100125.webp
       ./image_sequence/100126.webp
       ./image_sequence/100127.webp
       ./image_sequence/100128.webp
       ./image_sequence/100129.webp
       ./image_sequence/100130.webp
       ./image_sequence/100131.webp
       ./image_sequence/100132.webp
       ./image_sequence/100133.webp
       ./image_sequence/100134.webp
       ./image_sequence/100135.webp
       ./image_sequence/100136.webp
       ./image_sequence/100137.webp
       ./image_sequence/100138.webp
       ./image_sequence/100139.webp
       ./image_sequence/100140.webp
       ./image_sequence/100141.webp
       ./image_sequence/100142.webp
       ./image_sequence/100143.webp
       ./image_sequence/100144.webp
       ./image_sequence/100145.webp
       ./image_sequence/100146.webp
       ./image_sequence/100147.webp
       ./image_sequence/100148.webp
       ./image_sequence/100149.webp
       ./image_sequence/100150.webp
       ./image_sequence/100151.webp
       ./image_sequence/100152.webp
       ./image_sequence/100153.webp
       ./image_sequence/100154.webp
       ./image_sequence/100155.webp
       ./image_sequence/100156.webp
       ./image_sequence/100157.webp
       ./image_sequence/100158.webp
       ./image_sequence/100159.webp
       ./image_sequence/100160.webp
       ./image_sequence/100161.webp
       ./image_sequence/100162.webp
       ./image_sequence/100163.webp
       ./image_sequence/100164.webp
       ./image_sequence/100165.webp
       ./image_sequence/100166.webp
       ./image_sequence/100167.webp
       ./image_sequence/100168.webp
       ./image_sequence/100169.webp
       ./image_sequence/100170.webp
       ./image_sequence/100171.webp
       ./image_sequence/100172.webp
       ./image_sequence/100173.webp
       ./image_sequence/100174.webp
       ./image_sequence/100175.webp
       ./image_sequence/100176.webp
       ./image_sequence/100178.webp
       ./image_sequence/100179.webp
       ./image_sequence/100180.webp
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 180;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
})
