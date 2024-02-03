---
title: Comparer.Equals
---

# Comparer.Equals


## Description

दिए गए दो मानों पर समानता जाँच के आधार पर तार्किक मान लौटाता है.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

प्रदान किए गए <code>comparer</code> का उपयोग करके दिए गए दो मान, <code>x</code> और <code>y</code> पर समानता जाँच पर आधारित <code>logical</code> मान लौटाता है.      
      <div>        <code>comparer</code> <code>तुलनाकर्ता</code> है जिसका तुलना को नियंत्रित करने के लिए उपयोग किया जाता है.        तुलनाकर्ता एक ऐसा फ़ंक्शन है जो दो तर्कों को स्वीकार करता है और -1, 0, या 1 लौटाता है जो इस आधार पर होता है कि पहला मान दूसरे से कम है, उसके बराबर है या उससे अधिक है.        तुलनाकर्ताओं का उपयोग केस-असंवेदनशील या संस्कृति और स्थानीय-जागरूक तुलना प्रदान करने के लिए किया जा सकता है.      </div>      <div>        निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषा में उपलब्ध हैं:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: सटीक क्रमिक तुलना करने के लिए उपयोग किया जाता है</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: सटीक क्रमिक केस-असंवेदनशील तुलना करने के लिए उपयोग किया जाता है</li>        <li> <code>Comparer.FromCulture</code>: संस्कृति-जागरूक तुलना करने के लिए उपयोग किया जाता है</li>      </ul>


## Examples

### Example #1 
यह निर्धारित करने के लिए कि मान समान हैं या नहीं &#34;en-US&#34; लोकेल का उपयोग करके &#34;1&#34; और &#34;A&#34; की तुलना करें.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
