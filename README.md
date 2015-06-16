How-to on using cookies to capture UTM parameters.

I scoured the Marketo forums as well as myriad other sites and pages for weeks to figure out how to capture the original referral source of a user’s first visit, even if they don't convert at that time. But I never found a complete solution I could implement since I am not an experienced developer.  Therefore, in order to save others from the frustration I experienced, I offer the following detailed explanation of what finally worked for me.  Specifically, this is how to set the values from a URL with UTM parameter as cookies so a visitor’s original referral source can be captured. 

For example, a new user comes to a demo signup form on a Marketo landing page from a LinkedIn ad containing UTM parameters. He then leaves the page and visits our company’s main website.  He later returns and completes a whitepaper request form.  We want to know that he originally came from the LinkedIn ad.  

Let’s assume the URL on the LinkedIn ad is: http://mysite.com/product-demo-signup.html?utm_campaign=ProductDemo&utm_source=LinkedIn&utm_medium=display &utm_content=banner&utm_term=demos
Put the following code on your form pages.  You must have hidden fields on the forms to capture the UTM parameters.  When setting up the hidden fields on the form be sure to set Get Value from in the Autofill settings as “Cookie Value”.

In this example I have “utm_source”, “utm_campaign”, “utm_medium”, “utm_term”, and “utm_content” as hidden fields on my form.

<script type="text/javascript">

//This is grabbing the UTM parameters from the URL

function getQueryParams(qs) {

    qs = qs.split("+").join(" ");

    var params = {}, tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

//This is setting the cookies

var query = getQueryParams(document.location.search);

for (var key in query) {

    //console.log(key, query[key]);

    document.cookie = key + "=" + query[key];
	
	//Setting domain and path attributes allow cookies to be read across subdomains
	//To have a cookie available to all subdomains, you must put a . in front of your domain.
	//Setting the path=/ will have the cookie be available within the entire specified domain(aka .example.com). 

	//document.cookie = key + "=" + query[key] + ";domain=.yourdomain.com;path=/";
}

//This is getting the cookies 

//Id = Marketo field name
var elem = document.getElementById("utm_source");
var elem2 = document.getElementById("utm_campaign");
var elem3 = document.getElementById("utm_medium");
var elem4 = document.getElementById("utm_term");
var elem5 = document.getElementById("utm_content");
elem.value = query.utm_source;
elem2.value = query.utm_campaign;
elem3.value = query.utm_medium;
elem4.value = query.utm_term;
elem5.value = query.utm_content;

//This runs the script when the page loads so the hidden fields are //automatically populated 

window.onload = getQueryParams;

</script>


I added the code to my page templates and it is working fine. It also hasn’t affected any pages without forms.

I have set up a demo site that shows how the cookies are set and read:  http://evangogh.github.io/utm-cookies/?utm_campaign=amber&utm_source=alpha&utm_medium=apple&utm_term=ancient&utm_content=ants.








