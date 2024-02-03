---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

निर्दिष्ट कल्चर और केस-संवेदनशीलता के आधार पर तुलनाकर्ता फ़ंक्शन लौटाता है.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

एक तुलनाकर्ता फ़ंक्शन लौटाता है जो तुलना करने के लिए <code>culture</code> द्वारा निर्दिष्ट <code>ignoreCase</code> और केस-संवेदनशीलता का उपयोग करता है.<br />      <br />      एक तुलनाकर्ता फ़ंक्शन दो तर्कों को स्वीकार करता है और पहला मान दूसरे मान से कम, बराबर या अधिक है या नहीं, इसके आधार पर -1, 0, या 1 लौटाता है.<br />      <br />      <code>ignoreCase</code> के लिए डिफ़ॉल्ट मान गलत है. <code>culture</code> .NET फ़्रेमवर्क (उदाहरण के लिए, "en-US") द्वारा समर्थित भाषा में से एक होना चाहिए.    


## Examples

### Example #1 
यह निर्धारित करने के लिए कि मान समान हैं या नहीं, &#34;en-US&#34; लोकेल का उपयोग करके &#34;a&#34; और &#34;A&#34; की तुलना करें.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
यह निर्धारित करने के लिए कि मान समान हैं या नहीं, केस पर ध्‍यान न देते हुए &#34;en-US&#34; लोकेल का उपयोग करके &#34;a&#34; और &#34;A&#34; की तुलना करें.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
