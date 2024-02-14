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

पाठ मान <code>text</code> को रूपांतरित करने का परिणाम बाइनरी (<code>संख्या</code> की सूची) में लौटाता है. पाठ मान में उपयोग की गई एनकोडिंग को इंगित करने के लिए <code>encoding</code> को निर्दिष्ट किया जा सकता है.      निम्न <code>BinaryEncoding</code> मानों का उपयोग <code>encoding</code> के लिए किया जा सकता है.      <ul>        <li><code>BinaryEncoding.Base64</code>: बेस 64 एनकोडिंग</li>        <li><code>BinaryEncoding.Hex</code>: हेक्स एनकोडिंग</li>      </ul>


## Examples

### Example #1 
&#34;1011&#34; को बाइनरी में डीकोड करें.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
&#34;1011&#34; को हेक्स एन्कोडिंग के साथ बाइनरी में डीकोड करें.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
