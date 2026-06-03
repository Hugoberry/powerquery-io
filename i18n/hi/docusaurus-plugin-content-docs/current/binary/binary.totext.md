---
title: Binary.ToText
---

# Binary.ToText


बाइनरी डेटा को पाठ फ़ॉर्म में एन्कोड करता है.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

`binary` संख्याओं की बाइनरी सूची को पाठ मान में रूपांतरित करने के परिणाम को लौटाता है. वैकल्पिक रूप से, उत्पन्न पाठ मान में उपयोग की जाने वाली एनकोडिंग को इंगित करने के लिए `encoding` को निर्दिष्ट किया जा सकता है निम्न `BinaryEncoding` मानों का `encoding` के लिए उपयोग किया जा सकता है.

-   `BinaryEncoding.Base64`: बेस 64 एनकोडिंग
-   `BinaryEncoding.Hex`: हेक्स एनकोडिंग



## Category
Binary
