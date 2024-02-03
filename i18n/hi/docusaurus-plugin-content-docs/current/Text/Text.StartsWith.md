---
title: Text.StartsWith
---

# Text.StartsWith


## Description

इंगित करता है कि पाठ निर्दिष्ट मान से प्रारंभ हुआ है या नहीं.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

यदि पाठ मान <code>text</code> पाठ मान <code>substring</code> से प्रारंभ होता है, तो ट्रू वापस करता है.      <ul>        <li><code>text</code>: <i></i> एक <code>text</code> मान है जिसकी खोज करना है</li>        <li><code>substring</code>: <i></i> एक <code>पाठ</code> मान है जिसका <code>substring</code> में सबस्ट्रिंग की खोज करने के लिए </li>        <li><code>comparer</code>: <i>[Optional]</i> एक <code>तुलनाकर्ता</code> का तुलना नियंत्रित करने के लिए उपयोग किया जाता है. उदाहरण के लिए, <code>Comparer.OrdinalIgnoreCase</code> का केस-असंवेदनशील खोज पूरी करने के लिए उपयोग किया जा सकता है</li>      </ul>      <div>        <code>comparer</code> एक <code>Comparer</code> है जिसका तुलना को नियंत्रित करने के लिए उपयोग किया जाता है. तुलनाकर्ता केस-असंवेदी या कल्चर और लोकेल-संवेदी तुलना प्रदान करने के लिए उपयोग किए जा सकते है.      </div>      <div>        निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषा में उपलब्ध है:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: सटीक क्रम तुलना पूरी करने के लिए उपयोग किया जाता है</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: सटीक क्रम केस-असंवेदनशील तुलना पूरी करने के लिए उपयोग किया जाता है.</li>        <li> <code>Comparer.FromCulture</code>: कल्चर-संवेदी तुलना पूरी करने के लिए उपयोग किया जाता है</li>      </ul>


## Examples

### Example #1 
जाँचें कि क्या पाठ &#34;Hello, World&#34; पाठ &#34;hello&#34; से प्रारंभ होता है.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
जाँचें कि क्या पाठ &#34;Hello, World&#34; पाठ &#34;Hello&#34; से प्रारंभ होता है.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
