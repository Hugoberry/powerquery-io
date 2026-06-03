---
title: Binary.FromText
---

# Binary.FromText


डेटा को पाठ फ़ॉर्म से बाइनरी में डीकोड करता है.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

पाठ मान `text` को रूपांतरित करने का परिणाम बाइनरी (`संख्या` की सूची) में लौटाता है. पाठ मान में उपयोग की गई एनकोडिंग को इंगित करने के लिए `encoding` को निर्दिष्ट किया जा सकता है. निम्न `BinaryEncoding` मानों का उपयोग `encoding` के लिए किया जा सकता है.

-   `BinaryEncoding.Base64`: बेस 64 एनकोडिंग
-   `BinaryEncoding.Hex`: हेक्स एनकोडिंग


## Examples

### Example #1
"1011" को बाइनरी में डीकोड करें.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
"1011" को हेक्स एन्कोडिंग के साथ बाइनरी में डीकोड करें.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
