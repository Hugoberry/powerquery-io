---
title: Text.PositionOf
---

# Text.PositionOf


## Description

मान की प्रथम स्थिति को लौटाता है (यदि -1 नहीं मिला होता है).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

<code>text</code> में मिले पाठ मान <code>substring</code> की निर्दिष्ट आवृत्ति की स्थिति वापस करता है.    वैकल्पिक पैरामीटर <code>occurrence</code> का यह निर्दिष्ट करने के लिए उपयोग किया जा सकता है कि कौन-सी आवृत्ति स्थिति वापस की जाती है (डिफ़ॉल्ट के रूप से पहली आवृत्ति).    यदि <code>substring</code> नहीं मिलता तो, -1 वापस करता है.      <div>        <code>comparer</code> एक <code>Comparer</code> है जिसका तुलना को नियंत्रित करने के लिए उपयोग किया जाता है. तुलनाकर्ता केस-असंवे दनशील या कल्चर और लोकेल-संवेदी तुलना प्रदान करने के लिए उपयोग किए जा सकते हैं.      </div>      <div>          निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषा में उपलब्ध है:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: सटीक क्रम तुलना पूरी करने के लिए उपयोग किया गया</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: सटीक क्रम केस-असंवेदनशील तुलना पूरी करने के लिए उपयोग किया गया</li>        <li> <code>Comparer.FromCulture</code>: कल्चर-संवेदी तुलना करने के लिए उपयोग किया गया</li>      </ul>


## Examples

### Example #1 
पाठ &#34;Hello, World! में &#34;World&#34; की पहली आवृति की स्थिति पता करें Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
&#34;Hello, World! Hello, World!&#34; में &#34;World&#34; की अंतिम आवृति की स्थिति प्राप्त करें.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
