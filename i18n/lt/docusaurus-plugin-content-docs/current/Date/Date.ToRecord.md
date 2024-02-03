---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Pateikiamas įrašas su datos reikšmės dalimis.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Pateikiamas įrašas su pateiktos datos reikšmės dalimis, <code>date</code>. <ul>        <li><code>date</code>: <code>date</code> reikšmė, kurią naudojant apskaičiuojamas jos dalių įrašas.</li>      </ul>


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; reikšmę į įrašą, kuriame yra datos reikšmės dalys.
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
