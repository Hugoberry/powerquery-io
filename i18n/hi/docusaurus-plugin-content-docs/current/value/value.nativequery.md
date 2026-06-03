---
title: Value.NativeQuery
---

# Value.NativeQuery


किसी लक्ष्य के सापेक्ष किसी क्वेरी का मूल्यांकन करती है.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

`parameters` में निर्दिष्ट पैरामीटर्स और `options` में निर्दिष्ट विकल्पों का उपयोग करके `target`के लिए `query` का मूल्यांकन करता है.

क्वेरी का आउटपुट `target` द्वारा परिभाषित किया जाता है.

`target` उस कार्रवाई के लिए संदर्भ प्रदान करता है जो `query` के द्वारा वर्णित होती है.

`query` उस क्वेरी का वर्णन करता है जो `target` के लिए निष्पादित की जानी है. `query` को `target` के लिए एक विशिष्ट तरीके से अभिव्यक्त किया जाता है (उदाहरण के लिए, कोई T-SQL Statement).

वैकल्पिक `parameters` मान में `query` द्वारा अपेक्षित पैरामीटर मानों की आपूर्ति करने के लिए उपयुक्त रूप में या तो कोई सूची या रिकॉर्ड शामिल हो सकता है.

वैकल्पिक `options` रिकॉर्ड में ऐसे विकल्प हो सकते हैं जो `target` के सामने `query` के मूल्यांकन व्यवहार को प्रभावित करते हैं. ये विकल्प `target` के लिए विशिष्ट होते हैं.



## Category
Values
