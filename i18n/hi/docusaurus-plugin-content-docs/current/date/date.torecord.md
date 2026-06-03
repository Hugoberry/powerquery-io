---
title: Date.ToRecord
---

# Date.ToRecord


वह रिकॉर्ड लौटाता है, जिसमें दिनांक मान के भाग शामिल हैं.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

वह रिकॉर्ड लौटाता है, जिसमें दिए गए तिथि मान `date` के भाग शामिल हैं.

-   `date`: एक ऐसा `तिथि` मान, जिससे उसके भागों के रिकॉर्ड को परिकलित किया जाना है.


## Examples

### Example #1
`#date(2011, 12, 31)` मान को उस रिकॉर्ड में रूपांतरित करें जिसमें दिनांक मान के भाग शामिल हैं.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
