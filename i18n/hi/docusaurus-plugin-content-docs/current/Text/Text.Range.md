---
title: Text.Range
---

# Text.Range


## Description

ऑफ़सेट पाया गया सबस्ट्रिंग लौटाता है.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

ऑफ़सेट <code>offset</code> पर पाए गए सबस्ट्रिंग को पाठ <code>text</code> से लौटाता है.    एक वैकल्पिक पैरामीटर <code>count</code> को यह निर्दिष्ट करने के लिए शामिल किया जा सकता है कि कितने वर्ण लौटाने हैं. पर्याप्त वर्ण नहीं होने पर त्रुटि दिखाता है.


## Examples

### Example #1 
अनुक्रमणिका 6 से प्रारंभ होने वाले पाठ &#34;Hello World&#34; से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
5 वर्ण विस्तार करते हुए अनुक्रमणिका 6 से प्रारंभ होने वाले पाठ &#34;Hello World Hello&#34; से सबस्ट्रिंग ढूँढें.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
