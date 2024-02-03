---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

ऐसे बाइनरी स्वरूप को लौटाता है जो अन्य बाइनरी स्वरूप द्वारा पढ़े गए मानों को ट्रांसफ़ॉर्म करेगा.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

ऐसे बाइनरी स्वरूप को लौटाता है जो अन्य बाइनरी स्वरूप द्वारा पढ़े गए मानों को ट्रांसफ़ॉर्म करेगा.  <code>binaryFormat</code> पैरामीटर उस बाइनरी स्वरूप को निर्दिष्ट करता है जिसका उपयोग मान को पढ़ने के लिए किया जाएगा.  <code>function</code> को पढ़े गए मान के साथ इनवोक किया जाता है और ट्रांसफ़ॉर्म किए गए मान को लौटाता है.


## Examples

### Example #1 
एक बाइट पढ़ें और उसमें एक जोड़ें.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
