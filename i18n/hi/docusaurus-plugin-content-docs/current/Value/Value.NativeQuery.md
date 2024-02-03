---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

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


## Details

<code>parameters</code> में निर्दिष्ट पैरामीटर्स और <code>options</code> में निर्दिष्ट विकल्पों का उपयोग करके <code>target</code>के लिए <code>query</code> का मूल्यांकन करता है.<br />क्वेरी का आउटपुट <code>target</code> द्वारा परिभाषित किया जाता है.<br /><code>target</code> उस कार्रवाई के लिए संदर्भ प्रदान करता है जो <code>query</code> के द्वारा वर्णित होती है.<br /><code>query</code> उस क्वेरी का वर्णन करता है जो <code>target</code> के लिए निष्पादित की जानी है. <code>query</code> को <code>target</code> के लिए एक विशिष्ट तरीके से अभिव्यक्त किया जाता है (उदाहरण के लिए, कोई T-SQL Statement).<br />वैकल्पिक <code>parameters</code> मान में <code>query</code> द्वारा अपेक्षित पैरामीटर मानों की आपूर्ति करने के लिए उपयुक्त रूप में या तो कोई सूची या रिकॉर्ड शामिल हो सकता है.<br />वैकल्पिक <code>options</code> रिकॉर्ड में ऐसे विकल्प हो सकते हैं जो <code>target</code> के सामने <code>query</code> के मूल्यांकन व्यवहार को प्रभावित करते हैं. ये विकल्प <code>target</code> के लिए विशिष्ट होते हैं.<br />



## Category
Values
