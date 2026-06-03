---
title: Text.EndsWith
---

# Text.EndsWith


इंगित करता है कि क्या पाठ निर्दिष्ट मान पर समाप्त होता है.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

बताता है कि दिया गया पाठ, `text`, निर्दिष्ट मान से समाप्त होता है या नहीं, `substring`. संकेत केस संवेदनशील है.

`comparer` एक `Comparer` है जिसका तुलना को नियंत्रित करने के लिए उपयोग किया जाता है. तुलनाकर्ता केस-असंवेदनशील या कल्चर और लोकेल-संवेदी तुलना प्रदान करने के लिए उपयोग किए जा सकते हैं.

निम्नलिखित बिल्ट-इन तुलनाकर्ता सूत्र भाषा में उपलब्ध है:

-   `Comparer.Ordinal`: सटीक क्रम तुलना पूरी करने के लिए उपयोग किया गया
-   `Comparer.OrdinalIgnoreCase`: सटीक क्रम केस-असंवेदनशील तुलना पूरी करने के लिए उपयोग किया गया
-   `Comparer.FromCulture`: कल्चर-संवेदी तुलना करने के लिए उपयोग किया गया


## Examples

### Example #1
जाँचें कि क्या "Hello, World", "world" पर समाप्त होता है.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
जाँचें कि क्या "Hello, World", "World" पर समाप्त होता है.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
