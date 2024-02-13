---
title: BinaryFormat.Length
---

# BinaryFormat.Length


बाइनरी स्वरूप लौटाता है जो ऐसे डेटा की मात्रा को सीमित करता है जिसे पढ़ा जा सकता है.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

वह बाइनरी फ़ॉर्मैट लौटाता है जो ऐसे डेटा की मात्रा को सीमित करता है जिसे पढ़ा जा सकता है.  <code>BinaryFormat.List</code> और <code>BinaryFormat.Binary</code> दोनों का उपयोग डेटा को अंत तक पढ़ने के लिए किया जा सकता है.  <code>BinaryFormat.Length</code> का उपयोग पढ़ी गई बाइट्स की संख्या को सीमित करने के लिए किया जा सकता है.  <code>binaryFormat</code> पैरामीटर, सीमित किए जाने वाले बाइनरी फ़ॉर्मैट को निर्दिष्ट करता है.  <code>length</code> पैरामीटर पढ़ी जाने वाली बाइट्स की संख्या को निर्दिष्ट करता है.  <code>length</code> पैरामीटर या तो संख्या मान हो सकता है या एक बाइनरी फ़ॉर्मैट मान हो सकता है जो उस लंबाई मान का फ़ॉर्मैट निर्दिष्ट करता है जो पढ़े जा रहे मान से पहले होता है.


## Examples

### Example #1 
बाइट्स की सूची पढ़ने के दौरान पढ़ी गई बाइट्स की संख्या को 2 पर सीमित करें.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
बाइट्स की सूची पढ़ने के दौरान पढ़ी गई बाइट्स की संख्या को सूची से पहले वाले बाइट मान पर सीमित करें.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
