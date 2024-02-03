---
title: List.FirstN
---

# List.FirstN


## Description

लौटाए जाने वाले आइटमों की संख्या या योग्य शर्त निर्दिष्ट करके सूची में मौजूद आइटमों का पहला सेट लौटाता है.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>यदि कोई संख्या निर्दिष्ट है, तो उस तक कई आइटम लौटाए जाते हैं. </li>  <li>यदि कोई शर्त निर्दिष्ट है, तो प्रारंभिक रूप से शर्त को पूरा करने वाले सभी आइटमों को लौटाया जाता है. एकबार आइटम द्वारा शर्त को पूरा न करने पर, आगे किसी भी आइटम पर विचार नहीं किया जाता है. </li> </ul>


## Examples

### Example #1 
सूची \{3, 4, 5, -1, 7, 8, 2} के वे आरंभिक मान प्राप्त करें जो 0 से बड़े हैं.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
