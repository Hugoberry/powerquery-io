---
title: Time.ToRecord
---

# Time.ToRecord


वह रिकॉर्ड लौटाता है, जिसमें समय मान के भाग शामिल हैं.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

वह रिकॉर्ड लौटाता है, जिसमें दिए गए समय मान <code>time</code> के भाग शामिल हैं. <ul>        <li><code>time</code>: एक ऐसा <code>समय</code> मान, जिससे उसके अंशों के रिकॉर्ड को परिकलित किया जाना है.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#time(11, 56, 2)&lt;/code&gt; मान को उस रिकॉर्ड में रूपांतरित करें जिसमें समय मान शामिल हैं.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
