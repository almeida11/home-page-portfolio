$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
});
//não está funcionando ao rolar o scroll // avaliar o que está errado

//add funcionalidades dos botoes iniciais

//button home route













// Meta Pixel Code -->
!function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '903000894392218');
fbq('track', 'PageView');
<noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=903000894392218&ev=PageView&noscript=1"
/></noscript>
// End Meta Pixel Code -->