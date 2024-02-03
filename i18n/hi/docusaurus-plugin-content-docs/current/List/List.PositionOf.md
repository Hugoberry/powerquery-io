---
title: List.PositionOf
---

# List.PositionOf


## Description

सूची के मान का(के) ऑफ़सेट लौटाता है.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

वह ऑफ़सेट लौटाता है, जिस पर सूची <code>list</code> में <code>value</code> मान दिखाई देता है. मान के न दिखाई देने पर -1 लौटाता है.    एक वैकल्पिक आवृत्ति पैरामीटर <code>occurrence</code> निर्दिष्ट किया जा सकता है.<ul>   <li><code>occurrence</code>: रिपोर्ट होने वाली आवृत्तियों की अधिकतम संख्या.</li></ul>


## Examples

### Example #1 
सूची \{1, 2, 3} की वह स्थिति प्राप्त करें, जिस पर मान 3 दिखाई देते हैं.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
