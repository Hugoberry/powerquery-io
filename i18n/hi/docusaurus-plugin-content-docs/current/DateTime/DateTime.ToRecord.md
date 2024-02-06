---
title: DateTime.ToRecord
---

# DateTime.ToRecord


वह रिकॉर्ड लौटाता है, जिसमें datetime मान के भाग शामिल हैं.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

वह रिकॉर्ड लौटाता है, जिसमें दिए गए datetime मान <code>dateTime</code> के भाग शामिल हैं. <ul>        <li><code>dateTime</code>: एक ऐसा <code>datetime</code> मान, जिससे उसके भागों के रिकॉर्ड को परिकलित किया जाना है.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; मान को उस रिकॉर्ड में रूपांतरित करें जिसमें दिनांक और समय मान शामिल हैं.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
