---
title: BinaryFormat.Record
---

# BinaryFormat.Record


## Description

रिकॉर्ड को पढ़ने वाले बाइनरी स्वरूप को लौटाता है.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Details

रिकॉर्ड को पढ़ने वाले बाइनरी स्वरूप को लौटाता है.  <code>record</code> पैरामीटर रिकॉर्ड के स्वरूप को निर्दिष्ट करता है.  रिकॉर्ड की प्रत्येक फ़ील्ड में एक भिन्न बाइनरी स्वरूप हो सकता है.  यदि फ़ील्ड में एक मान है जो बाइनरी स्वरूप मान नहीं है, तो उस फ़ील्ड के लिए कोई डेटा पढ़ा नहीं जाता है और फ़ील्ड मान परिणाम के लिए दोहराया जाता है.


## Examples

### Example #1 
एक 16-बिट पूर्णांक और एक 32-बिट पूर्णांक वाले रिकॉर्ड को पढ़ें.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
