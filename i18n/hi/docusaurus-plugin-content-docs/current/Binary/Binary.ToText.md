---
title: Binary.ToText
---

# Binary.ToText


## Description

बाइनरी डेटा को पाठ फ़ॉर्म में एन्कोड करता है.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

<code>binary</code> संख्याओं की बाइनरी सूची को पाठ मान में रूपांतरित करने के परिणाम को लौटाता है. वैकल्पिक रूप से, उत्पन्न पाठ मान में उपयोग की जाने वाली एनकोडिंग को इंगित करने के लिए <code>encoding</code> को निर्दिष्ट किया जा सकता है      निम्न <code>BinaryEncoding</code> मानों का <code>encoding</code> के लिए उपयोग किया जा सकता है.      <ul>        <li><code>BinaryEncoding.Base64</code>: बेस 64 एनकोडिंग</li>        <li><code>BinaryEncoding.Hex</code>: हेक्स एनकोडिंग</li>      </ul>



## Category
Binary
