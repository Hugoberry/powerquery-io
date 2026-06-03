---
title: Text.PositionOf
---

# Text.PositionOf


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


## Remarks

`text` में मिले पाठ मान `substring` की निर्दिष्ट आवृत्ति की स्थिति वापस करता है. वैकल्पिक पैरामीटर `occurrence` का यह निर्दिष्ट करने के लिए उपयोग किया जा सकता है कि कौन-सी आवृत्ति स्थिति वापस की जाती है (डिफ़ॉल्ट के रूप से पहली आवृत्ति). यदि `substring` नहीं मिलता तो, -1 वापस करता है.

`comparer` एक `Comparer` है जिसका तुलना को नियंत्रित करने के लिए उपयोग किया जाता है. तुलनाकर्ता केस-असंवे दनशील या कल्चर और लोकेल-संवेदी तुलना प्रदान करने के लिए उपयोग किए जा सकते हैं.

निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषा में उपलब्ध है:

-   `Comparer.Ordinal`: सटीक क्रम तुलना पूरी करने के लिए उपयोग किया गया
-   `Comparer.OrdinalIgnoreCase`: सटीक क्रम केस-असंवेदनशील तुलना पूरी करने के लिए उपयोग किया गया
-   `Comparer.FromCulture`: कल्चर-संवेदी तुलना करने के लिए उपयोग किया गया


## Examples

### Example #1
पाठ "Hello, World! में "World" की पहली आवृति की स्थिति पता करें Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
"Hello, World!" में "World" के अंतिम बार आने की स्थिति प्राप्त करें. "Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
