---
title: BinaryFormat.Text
---

# BinaryFormat.Text


## Description

पाठ मान को पढ़ने वाले बाइनरी स्वरूप को लौटाता है.


## Syntax

```powerquery
BinaryFormat.Text(
    length as any,
    optional encoding as TextEncoding.Type
) as function
```


## Details

पाठ मान को पढ़ने वाले बाइनरी फ़ॉर्मैट को लौटाता है.  <code>length</code> डिकोड की जाने वाली बाइट्स की संख्या को निर्दिष्ट करता है या पाठ से पहले वाली लंबाई के बाइनरी फ़ॉर्मैट को निर्दिष्ट करता है.  वैकल्पिक <code>encoding</code> मान पाठ की एन्कोडिंग को निर्दिष्ट करता है.  यदि <code>encoding</code> निर्दिष्ट नहीं होता है, तो एन्कोडिंग को यूनिकोड बाइट क्रम चिह्न से निर्धारित किया जाता है.  यदि कोई भी बाइट क्रम चिह्न मौजूद नहीं होते हैं, तो <code>TextEncoding.Utf8</code> का उपयोग किया जाता है.


## Examples

### Example #1 
दो बाइट्स को ASCII पाठ के रूप में डीकोड करें.
```powerquery
let
    binaryData = #binary({65, 66, 67}),
    textFormat = BinaryFormat.Text(2, TextEncoding.Ascii)
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```


### Example #2 
ASCII पाठ डीकोड करें जहाँ पर पाठ की बाइट्स में लंबाई, पाठ से पहले बाइट के रूप में प्रकट होती है.
```powerquery
let
    binaryData = #binary({2, 65, 66}),
    textFormat = BinaryFormat.Text(
        BinaryFormat.Byte,
        TextEncoding.Ascii
    )
in
    textFormat(binaryData)
```

Result: 
```powerquery
"AB"
```




## Category
Binary Formats.Reading text
