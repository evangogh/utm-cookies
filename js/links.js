
/* These scripts are just for demo purposes. */

/* This displays the set cookies that are on the page */
function GetAllCookies() {
         
             if (document.cookie === "") {
                 document.getElementById("cookies").innerHTML = ("<p style='color: #ff0000;padding-bottom: 15px;'>" + "There are no cookies on this page!" + "</p>");
         
             } else {
                 document.getElementById("cookies").innerHTML = ("<p style='color: #000;'>" + "These are the cookies on this page:" + "</p>" + "<p class='utm-values'>" + document.cookie + "</p>");
             }
         }
         //window.onload = GetAllCookies();

/* This generates a random URL from list below */        
(function () {
    var newLink = [{
		href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=amber&utm_source=alpha&utm_medium=apple&utm_term=ancient&utm_content=ants'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=beige&utm_source=bravo&utm_medium=banana&utm_term=best&utm_content=beast'
	}, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=brown&utm_source=bingo&utm_medium=bear&utm_term=barley&utm_content=banter'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=chartreuse&utm_source=charlie&utm_medium=cherry&utm_term=crazy&utm_content=creature'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=drab&utm_source=delta&utm_medium=dairy&utm_term=dainty&utm_content=daisy'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=ecru&utm_source=echo&utm_medium=eggplant&utm_term=eager&utm_content=eel'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=fuschia&utm_source=foxtrot&utm_medium=figs&utm_term=fantastic&utm_content=fish'
    }, {	
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=green&utm_source=golf&utm_medium=grape&utm_term=greedy&utm_content=giant'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=hotpink&utm_source=hotel&utm_medium=huckleberry&utm_term=hairy&utm_content=hamster'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=indigo&utm_source=india&utm_medium=ice&utm_term=invisible&utm_content=icicle'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=jade&utm_source=juliet&utm_medium=jellybean&utm_term=juicy&utm_content=jester'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=kellygreen&utm_source=kilo&utm_medium=kiwi&utm_term=kinetic&utm_content=knob'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=lavendar&utm_source=lima&utm_medium=lasagna&utm_term=loving&utm_content=lion'
    }, {
		href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=magenta&utm_source=mustard&utm_medium=mango&utm_term=messy&utm_content=monster'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=navyblue&utm_source=november&utm_medium=noodle&utm_term=nasty&utm_content=needle'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=ochre&utm_source=oscar&utm_medium=olive&utm_term=opposite&utm_content=ocean'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=pink&utm_source=papa&utm_medium=papaya&utm_term=portly&utm_content=porcupine'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=quartz&utm_source=quebec&utm_medium=quince&utm_term=quiet&utm_content=quack'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=red&utm_source=romeo&utm_medium=rice&utm_term=radical&utm_content=raisin'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=scarlet&utm_source=sierra&utm_medium=sahara&utm_term=sad&utm_content=star'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=titanium&utm_source=tango&utm_medium=tomato&utm_term=terrible&utm_content=tiger'
	}, {
		http: 'http://evangogh.github.io/utm-cookies/?utm_campaign=teal&utm_source=tangerine&utm_medium=taffy&utm_term=tasty&utm_content=tortoise'
    }, {
		href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=umber&utm_source=uniform&utm_medium=umbrella&utm_term=ugly&utm_content=underwear'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=violet&utm_source=victor&utm_medium=virus&utm_term=vindictive&utm_content=vision'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=white&utm_source=whiskey&utm_medium=winter&utm_term=wild&utm_content=window'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=xanadu&utm_source=xray&utm_medium=xylophone&utm_term=xterra&utm_content=xenophobe'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=yellow&utm_source=yankee&utm_medium=yield&utm_term=year&utm_content=yodel'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/?utm_campaign=zinc&utm_source=zulu&utm_medium=zap&utm_term=zany&utm_content=zebra'
	}

    ];

    function randLinks() {
        var link, pageLinkClass = 'newLink',
            pageLinks = document.getElementsByTagName('a');
        pageLinkClass = new RegExp('\\b' + pageLinkClass + '\\b');
        for (var i = 0; i < pageLinks.length; ++i) {
            if (pageLinkClass.test(pageLinks[i].className)) {
                link = newLink[Math.floor(Math.random() * newLink.length)];
                pageLinks[i].href = link.href;
                //pageLinks[i].firstChild.nodeValue = link.text;
                //pageLinks[i].target = '_blank';
            }
        }
    }
    if (window.addEventListener) {
        window.addEventListener('load', randLinks, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', randLinks);
    }
})();

(function () {
    var newSite = [{
		href: 'http://evangogh.github.io/second-site/index.html'
    }, {
        href: 'http://evangogh.github.io/second-site/site2.html'
	}, {
        href: 'http://evangogh.github.io/second-site/site3.html'
    }, {
        href: 'http://evangogh.github.io/second-site/site4.html'
    }, {
        href: 'http://evangogh.github.io/second-site/site5.html'
    }

    ];

    function randSites() {
        var link, pageLinkClass = 'newSite',
            pageLinks = document.getElementsByTagName('a');
        pageLinkClass = new RegExp('\\b' + pageLinkClass + '\\b');
        for (var i = 0; i < pageLinks.length; ++i) {
            if (pageLinkClass.test(pageLinks[i].className)) {
                link = newSite[Math.floor(Math.random() * newSite.length)];
                pageLinks[i].href = link.href;
                //pageLinks[i].firstChild.nodeValue = link.text;
                //pageLinks[i].target = '_blank';
            }
        }
    }
    if (window.addEventListener) {
        window.addEventListener('load', randSites, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', randSites);
    }
})();

(function () {
    var newPage = [{
        href: 'http://evangogh.github.io/utm-cookies/page1.html'
	}, {
        href: 'http://evangogh.github.io/utm-cookies/page2.html'
	}, {
        href: 'http://evangogh.github.io/utm-cookies/page3.html'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/page4.html'
    }, {
        href: 'http://evangogh.github.io/utm-cookies/page5.html'
    }

    ];

    function randPages() {
        var link, pageLinkClass = 'newPage',
            pageLinks = document.getElementsByTagName('a');
        pageLinkClass = new RegExp('\\b' + pageLinkClass + '\\b');
        for (var i = 0; i < pageLinks.length; ++i) {
            if (pageLinkClass.test(pageLinks[i].className)) {
                link = newPage[Math.floor(Math.random() * newPage.length)];
                pageLinks[i].href = link.href;
                //pageLinks[i].firstChild.nodeValue = link.text;
                //pageLinks[i].target = '_blank';
            }
        }
    }
    if (window.addEventListener) {
        window.addEventListener('load', randPages, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', randPages);
    }
})();

  $(document).ready(function() {
	  var utmcampaign = $("#utm_campaign").val() 
     $('#btnGo').attr('disabled','disabled');
	 $('#btnGo').removeClass('transparent','');
	  $('#btnGo').css('cursor','default');
     $("#btnSet").click(function() {
           $('#btnGo').removeAttr('disabled');
		   $('#btnGo').addClass('transparent');
		   $('#btnGo').css('cursor','pointer');
     });
 });

/* Deletes cookies */
	  function deleteCookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        alert('Cookie deleted');
    } 
	
	/* <button onclick="deleteCookie()" class="button">Delete cookies</button> */
