---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Pateikiamas įrašas su datos ir laiko reikšmės dalimis.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Pateikiamas įrašas su nurodytos datos ir laiko reikšmės dalimis, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: <code>datetime</code> reikšmė, kurią naudojant apskaičiuojamas jos dalių įrašas.</li>      </ul>


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; reikšmę į įrašą, kuriame yra datos ir laiko reikšmės.
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
