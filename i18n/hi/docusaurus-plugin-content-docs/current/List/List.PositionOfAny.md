---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

सूची के मान का पहला ऑफ़सेट लौटाता है.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

सूची <code>values</code> के मान की पहली आवृत्ति की सूची <code>list</code> का ऑफ़सेट लौटाता है. कोई आवृत्ति न मिलने पर -1 लौटाता है.    एक वैकल्पिक आवृत्ति पैरामीटर <code>occurrence</code> निर्दिष्ट किया जा सकता है.<ul>   <li><code>occurrence</code>: लौटाई जा सकने वाली आवृत्तियों की अधिकतम संख्या.</li></ul>


## Examples

### Example #1 
सूची \{1, 2, 3} की वह पहली स्थिति प्राप्त करें, जिस पर मान 2 या 3 दिखाई देते हैं.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
