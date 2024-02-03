---
title: Text.Contains
---

# Text.Contains


## Description

यदि पाठ में सबस्ट्रिंग है तो लौटाता है.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

पता लगाता है कि <code>text</code> में मान <code>substring</code> है या नहीं. यदि मान मिलता है, तो ट्रू वापस करता है. यह फ़ंक्शन वाइल्डकार्ड या नियमित अभिव्यक्ति का समर्थन नहीं करता है.      <br />      <br />      वैकल्पिक तर्क <code>comparer</code> का उपयोग केस-असंवेदनशील या कल्चर और लोकेल-संवेदी तुलनाओं को निर्दिष्ट करने के लिए उपयोग किया जा सकता है.      निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषाओं में उपलब्ध है:      <ul>        <li><code>Comparer.Ordinal</code>: केस-संवेदनशील सटीक तुलना पूरी करने के लिए उपयोग किया गया</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: केस-असंवेदनशील क्रम तुलना पूरी करने के लिए उपयोग किया गया</li>        <li> <code>Comparer.FromCulture</code>: कल्चर-संवेदी तुलना करने के लिए उपयोग किया गया</li>      </ul>


## Examples

### Example #1 
पते करें कि क्या पाठ &#34;Hello World&#34; में &#34;Hello&#34; शामिल है.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
पते करें कि क्या पाठ &#34;Hello World&#34; में &#34;hello&#34; शामिल है.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
केस-असंवेदी तुलनाकर्ता का उपयोग करके ढूँढना कि क्या पाठ &#34;नमस्ते दुनिया&#34; में &#34;नमस्ते&#34; शामिल है.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
