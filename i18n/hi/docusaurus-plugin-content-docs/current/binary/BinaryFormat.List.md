---
title: BinaryFormat.List
---

# BinaryFormat.List


एक ऐसा बाइनरी स्वरूप लौटाता है जो आइटम्स के अनुक्रम को पढ़ता है और एक सूची लौटाता है.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

किसी ऐसे बाइनरी फॉर्मैट को लौटाता है जो आइटम्स का कोई अनुक्रम पढ़ता है और किसी <code>list</code> को लौटाता है.  <code>binaryFormat</code> पैरामीटर प्रत्येक आइटम के बाइनरी फॉर्मैट को निर्दिष्ट करता है.  पढ़ी गई आइटम्स की संख्या को निर्धारित करने के तीन तरीके होते हैं: <ul><li>यदि <code>countOrCondition</code> निर्दिष्ट नहीं है, तो बाइनरी फॉर्मैट, आइटम्स के समाप्त होते तक, उन्हें पढ़ेगा.</li><li>यदि <code>countOrCondition</code> कोई संख्या है, तो बाइनरी फॉर्मैट उतनी आइटम्स पढ़ेगा.</li><li>यदि <code>countOrCondition</code> एक फ़ंक्शन है, तो प्रत्येक पढ़ी गई आइटम के लिए, उसी फ़ंक्शन को इनवोक किया जाएगा.  आइटम्स को पढ़ना जारी रखने के लिए फ़ंक्शन ‘true’ लौटाता है, और पढना रोकने के लिए, ‘false’ लौटाता है.  अंतिम आइटम को सूची में शामिल किया जाता है.</li><li>यदि <code>countOrCondition</code> एक बाइनरी फॉर्मैट है, तो यह अपेक्षा की जाती है कि आइटम्स की गणना सूची से पहले हो, और गणना को पढ़ने के लिए निर्दिष्ट किए गए फॉर्मैट का उपयोग किया जाता है.</li></ul>


## Examples

### Example #1 
डेटा के अंत तक बाइट्स पढ़ें.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
दो बाइट्स पढ़ें.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
जब तक बाइट मान दो से अधिक या उससे बराबर नहीं हो जाता, बाइट्स पढ़ें.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
