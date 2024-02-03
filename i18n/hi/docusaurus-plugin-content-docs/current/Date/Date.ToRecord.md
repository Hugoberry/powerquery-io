---
title: Date.ToRecord
---

# Date.ToRecord


## Description

वह रिकॉर्ड लौटाता है, जिसमें दिनांक मान के भाग शामिल हैं.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

वह रिकॉर्ड लौटाता है, जिसमें दिए गए तिथि मान <code>date</code> के भाग शामिल हैं. <ul>        <li><code>date</code>: एक ऐसा <code>तिथि</code> मान, जिससे उसके भागों के रिकॉर्ड को परिकलित किया जाना है.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; मान को उस रिकॉर्ड में रूपांतरित करें जिसमें दिनांक मान के भाग शामिल हैं.
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
