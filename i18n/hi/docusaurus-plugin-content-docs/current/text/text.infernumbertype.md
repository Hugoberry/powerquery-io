---
title: Text.InferNumberType
---

# Text.InferNumberType


पाठ में एन्कोड की गई संख्या के ग्रैन्युलर नंबर प्रकार (Int64.Type, Double.Type, इत्यादि.) का अनुमान लगाता है.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

<code>text</code> के ग्रैन्युलर नंबर के प्रकार (Int64.Type, Double.Type, इत्यादि.) का अनुमान लगाता है. यदि <code>text</code> कोई संख्या न हो, तो एक त्रुटि उत्पन्न की जाती है. एक वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").



## Category
Text
