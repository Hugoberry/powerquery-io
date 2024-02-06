---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


ऐसे बाइनरी स्वरूप को लौटाता है जो पहले ही पढ़े गए मान के आधार पर अगले बाइनरी स्वरूप का चयन करता है.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

ऐसे बाइनरी स्वरूप को लौटाता है जो पहले ही पढ़े गए मान के आधार पर अगले बाइनरी स्वरूप का चयन करता है.  इस फ़ंक्शन द्वारा उत्पन्न बाइनरी मान इन अवस्थाओं में काम करता है:<ul><li><code>binaryFormat</code> पैरामीटर द्वारा निर्दिष्ट किए गए बाइनरी स्वरूप का उपयोग मान को पढ़ने के लिए किया जाता है.</li><li><code>chooseFunction</code> पैरामीटर द्वारा निर्दिष्ट किए गए चॉइस फ़ंक्शन में मान को पास किया जाता है.</li><li>चॉइस फ़ंक्शन मान का निरीक्षण करता है और एक द्वितीय बाइनरी स्वरूप लौटाता है.</li><li>द्वितीय बाइनरी स्वरूप का उपयोग द्वितीय मान को पढ़ने के लिए किया जाता है.</li><li>यदि संयोजन फ़ंक्शन निर्दिष्ट किया गया होता है, तो पहले और दूसरे मानों को संयोजन फ़ंक्शन में पास किया जाता है और परिणामित मान को लौटाया जाता है.</li><li>यदि संयोजन फ़क्शंन निर्दिष्ट नहीं किया गया होता है, तो द्वितीय मान को लौटाया जाता है.</li><li>द्वितीय मान को लौटाया गया.</li></ul>वैकल्पिक <code>type</code> पैरामीटर उस बाइनरी स्वरूप को इंगित करता है जो चॉइस फ़ंक्शन द्वारा लौटाया जाएगा.  या तो <code>type any</code>, <code>type list</code> या <code>type binary</code> निर्दिष्ट किए जा सकता हैं.  यदि <code>type</code> पैरामीटर निर्दिष्ट नहीं किया गया होता है, तो <code>type any</code> उपयोग किया जाता है.   यदि <code>type list</code> या <code>type binary</code> का उपयोग किया गया होता है, तो सिस्टम बफ़र्ड के बजाए एक स्ट्रीमिंग <code>binary</code> या <code>list</code> मान को लौटा सकता है, जो स्वरूप को पढ़ने के लिए आवश्यक स्मृति की मात्रा को कम कर सकता है.


## Examples

### Example #1 
बाइट्स की सूची पढ़ें, जहाँ तत्वों की संख्या पहली बाइट से निर्धारित होती है.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2 
बाइट्स की सूची पढ़ें, जहाँ तत्वों की संख्या पहली बाइट से निर्धारित होती है और पढ़ी गई पहली बाइट को संरक्षित करें.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3 
बाइट्स की सूची पढ़ें, जहाँ तत्वों की संख्या स्ट्रीमिंग सूची का उपयोग करके पहली बाइट से निर्धारित होती है.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
