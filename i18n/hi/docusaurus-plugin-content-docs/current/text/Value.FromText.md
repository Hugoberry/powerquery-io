---
title: Value.FromText
---

# Value.FromText


पाठ प्रस्तुतिकरण से पुरज़ोर मान बनाता है.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

पाठ प्रस्तुतिकरण, <code>text</code> से एक मान को डिकोड करता है, और एक उपयुक्त प्रकार वाले एक मान के रूप में इसकी व्याख्या करता है.    <code>Value.FromText</code>एक पाठ मान को लेता है और एक संख्या, तार्किक मान, नल मान, तिथिसमय मान, अवधि मान या पाठ मान लौटाता है. रिक्त पाठ मान की व्याख्या एक नल मान के रूप में की कई है.    एक वैकल्पिक <code>culture</code> भी प्रदान किया जा सकता है (उदाहरण के लिए, "en-US").



## Category
Text.Conversions from and to text
