---
title: Web.Headers
---

# Web.Headers


## Description

रिकॉर्ड मान के रूप में url से डाउनलोड किए गए HTTP शीर्षलेख वापस करता है.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

रिकॉर्ड के रूप में <code>url</code> से डाउनलोड किए गए शीर्षलेख वापस करता है. वैकल्पिक रिकॉर्ड पैरामीटर, <code>options</code>, अतिरिक्त गुणों को निर्दिष्ट करने के लिए प्रदान किया जा सकता है. रिकॉर्ड में निम्न फ़ील्ड हो सकती हैं:    <ul><li><code>Query</code> : एस्केपिंग के बारे में चिंता किए बिना, प्रोग्राम द्वारा URL में क्वेरी पैरामीटर जोड़ें.</li><li><code>ApiKeyName</code> : यदि लक्ष्य साइट में एक API कुंजी की धारणा है, तो इस पैरामीटर का उपयोग उस कुंजी पैरामीटर के नाम (न मान) को निर्दिष्ट करने के लिए किया जा सकता है जिसका उपयोग URL में किया जाना चाहिए. क्रेडेंशियल में वास्तविक कुंजी मान प्रदान किया गया है.</li><li><code>Headers</code> : इस मान को रिकॉर्ड के रूप में निर्दिष्ट करने से किसी HTTP अनुरोध पर अतिरिक्त शीर्ष लेख प्रदान होंगे.</li><li><code>Timeout</code> : इस मान को अवधि के रूप में निर्दिष्ट करना HTTP अनुरोध के लिए टाइमआउट को बदल देगा. डिफ़ॉल्ट मान १०० सेकंड है.</li><li><code>ExcludedFromCacheKey</code> : इस मान को सूची के रूप में निर्दिष्ट करने से इन HTTP शीर्षलेख कुंजियों को डेटा कैशिंग के लिए परिकलन का भाग होने से बाहर किया जा सकेगा.</li><li><code>IsRetry</code> : इस लॉजिकल मान को true के रूप में निर्दिष्ट करने से डेटा फ़ेच करते समय कैश में मौजूद किसी भी मौजूदा प्रतिसाद को अनदेखा कर दिया जाता है.</li><li><code>ManualStatusHandling</code> : इस मान को सूची के रूप में निर्दिष्ट करने से उन HTTP अनुरोधों के लिए कोई भी अंतर्निहित हैंडलिंग को रोका जा सकेगा जिनके प्रतिसाद में इनमें से एक स्थिति कोड है.</li><li><code>RelativePath</code> : इस मान को पाठ के रूप में निर्दिष्ट करने से अनुरोध करने से पहले उसे आधार URL में जोड़ता है.</li></ul>    HTTP अनुरोध HEAD विधि से बनाया जाता है. कस्टम डेटा कनेक्टर संदर्भ के बाहर केवल प्रतिसाद शीर्षलेख का सबसेट उपलब्ध है (सुरक्षा कारणों के लिए).    


## Examples

### Example #1 
RelativePath और क्वेरी विकल्पों का उपयोग करके &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; के लिए HTTP शीर्षलेख पुनर्प्राप्त करें.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
