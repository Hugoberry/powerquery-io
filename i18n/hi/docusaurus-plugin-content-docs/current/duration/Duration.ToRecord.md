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

वह रिकॉर्ड लौटाता है, जिसमें अवधि मान <code>duration</code> के भाग शामिल हैं.  <ul>        <li><code>duration</code>: एक ऐसी <code>अवधि</code> जिससे रिकॉर्ड बनाया जाता है.</li>      </ul>


## Examples

### Example #1 
अगर लागू हो, तो &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; को उसके भागों के रिकॉर्ड में रूपांतरित करें जिसमें दिन, घंटे, मिनट और सेकंड शामिल हैं.
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
