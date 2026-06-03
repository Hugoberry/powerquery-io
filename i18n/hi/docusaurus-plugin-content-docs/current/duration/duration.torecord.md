---
title: Duration.ToRecord
---

# Duration.ToRecord


अवधि के भागों वाला एक रिकॉर्ड लौटाता है.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

वह रिकॉर्ड लौटाता है, जिसमें अवधि मान `duration` के भाग शामिल हैं.

-   `duration`: एक ऐसी `अवधि` जिससे रिकॉर्ड बनाया जाता है.


## Examples

### Example #1
अगर लागू हो, तो `#duration(2, 5, 55, 20)` को उसके भागों के रिकॉर्ड में रूपांतरित करें, जिसमें दिन, घंटे, मिनट और सेकंड शामिल हैं.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
