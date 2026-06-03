---
title: Text.StartsWith
---

# Text.StartsWith


इंगित करता है कि पाठ निर्दिष्ट मान से प्रारंभ हुआ है या नहीं.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

अगर टेक्स्ट मान `text`, टेक्स्ट मान `substring` से शुरू होता है, तो true लौटाता है.

-   `text`: एक `text` मान जिसे खोजा जाना है.
-   `substring`: एक `text` मान, जो `text` में खोजा जाने वाला सबस्ट्रिंग है.
-   `comparer`: *(वैकल्पिक)* तुलना को नियंत्रित करने के लिए प्रयुक्त एक `Comparer`. उदाहरण के लिए, केस-असंवेदी खोज करने के लिए `Comparer.OrdinalIgnoreCase` का उपयोग किया जा सकता है.

`comparer` एक `Comparer` है, जिसका उपयोग तुलना को नियंत्रित करने के लिए किया जाता है. तुलनाकर्ताओं का उपयोग केस-असंवेदी या कल्चर और लोकेल-अवेयर तुलनाएँ प्रदान करने के लिए किया जा सकता है.

निम्नलिखित अंतर्निहित तुलनाकर्ता सूत्र की भाषा में उपलब्ध हैं:

-   `Comparer.Ordinal`: सटीक क्रमसूचक तुलना करने के लिए उपयोग किया जाता है.
-   `Comparer.OrdinalIgnoreCase`: सटीक क्रमसूचक केस-असंवेदी तुलना करने के लिए उपयोग किया जाता है.
-   `Comparer.FromCulture`: कल्चर से अवगत तुलना करने के लिए उपयोग किया जाता है.


## Examples

### Example #1
जाँचें कि क्या पाठ "Hello, World" पाठ "hello" से प्रारंभ होता है.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
जाँचें कि क्या पाठ "Hello, World" पाठ "Hello" से प्रारंभ होता है.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
केस पर ध्यान न देते हुए, जाँचें कि क्या पाठ "Hello, World" पाठ "hello" से प्रारंभ होता है.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
