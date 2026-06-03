---
title: Text.Range
---

# Text.Range


ऑफ़सेट पाया गया सबस्ट्रिंग लौटाता है.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

ऑफ़सेट `offset` पर पाए गए सबस्ट्रिंग को टेक्स्ट `text` से लौटाता है. एक वैकल्पिक पैरामीटर, `count`, को यह निर्दिष्ट करने के लिए शामिल किया जा सकता है कि कितने कैरेक्टर लौटाने हैं. पर्याप्त कैरेक्टर नहीं होने पर त्रुटि आती है.


## Examples

### Example #1
अनुक्रमणिका 6 से प्रारंभ होने वाले पाठ "Hello World" से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
5 वर्ण विस्तार करते हुए अनुक्रमणिका 6 से प्रारंभ होने वाले पाठ "Hello World Hello" से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
