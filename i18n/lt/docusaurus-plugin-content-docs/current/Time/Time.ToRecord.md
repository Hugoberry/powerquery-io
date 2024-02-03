---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Pateikiamas įrašas su laiko reikšmės dalimis.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

Pateikiamas įrašas su pateiktos laiko reikšmės dalimis: <code>time</code>. <ul>        <li><code>time</code>: <code>time</code> reikšmė, kurią naudojant apskaičiuojamas dalių įrašas.</li>      </ul>


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; reikšmę į įrašą, kuriame yra laiko reikšmės.
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
