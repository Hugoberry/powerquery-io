---
title: Text.EndsWith
---

# Text.EndsWith


## Description

इंगित करता है कि क्या पाठ निर्दिष्ट मान पर समाप्त होता है.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

बताता है कि दिया गया पाठ, <code>text</code>, निर्दिष्ट मान से समाप्त होता है या नहीं, <code>substring</code>. संकेत केस संवेदनशील है.      <div>        <code>comparer</code> एक <code>Comparer</code> है जिसका तुलना को नियंत्रित करने के लिए उपयोग किया जाता है. तुलनाकर्ता केस-असंवेदनशील या कल्चर और लोकेल-संवेदी तुलना प्रदान करने के लिए उपयोग किए जा सकते हैं.      </div>      <div>          निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषा में उपलब्ध है:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: सटीक क्रम तुलना पूरी करने के लिए उपयोग किया गया</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: सटीक क्रम केस-असंवेदनशील तुलना पूरी करने के लिए उपयोग किया गया</li>        <li> <code>Comparer.FromCulture</code>: कल्चर-संवेदी तुलना करने के लिए उपयोग किया गया</li>      </ul>


## Examples

### Example #1 
जाँचें कि क्या &#34;Hello, World&#34;, &#34;world&#34; पर समाप्त होता है.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
जाँचें कि क्या &#34;Hello, World&#34;, &#34;World&#34; पर समाप्त होता है.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
