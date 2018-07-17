I scoured the Marketo forums as well as myriad other sites and pages for weeks to figure out how to capture the original referral source of a user’s first visit, even if they don't convert at that time. But I never found a complete solution I could implement since I am not an experienced developer.  Therefore, in order to save others from the frustration I experienced, I offer the following solution that finally worked for me.  Specifically, this sets the values from a URL with UTM parameter as cookies so a visitor’s original referral source can be captured. 

For example, a new user comes to a demo signup form on a Marketo landing page from a LinkedIn ad containing UTM parameters. He then leaves the page and visits our company’s main website.  He later returns and completes a whitepaper request form.  We want to know that he originally came from the LinkedIn ad.  

Let’s assume the URL on the LinkedIn ad is: http://mysite.com/product-demo-signup.html?utm_campaign=ProductDemo&utm_source=LinkedIn&utm_medium=display &utm_content=banner&utm_term=demos
Put the following code on your form pages.  You must have hidden fields on the forms to capture the UTM parameters.  When setting up the hidden fields on the form be sure to set Get Value from in the Autofill settings as “Cookie Value”.

I have set up a demo site that shows how the cookies are set and read:  http://evangogh.github.io/utm-cookies/?utm_campaign=amber&utm_source=alpha&utm_medium=apple&utm_term=ancient&utm_content=ants.








