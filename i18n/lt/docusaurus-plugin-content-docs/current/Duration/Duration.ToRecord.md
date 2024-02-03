---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Pateikiamas įrašas su trukmės dalimis.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

Pateikiamas įrašas su trukmės reikšmės dalimis, <code>duration</code>.  <ul>        <li><code>duration</code>: <code>duration</code>, kurią naudojant sukuriamas įrašas.</li>      </ul>


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; į dalių įrašą, įtraukdami dienas, valandas, minutes ir sekundes, jei taikoma.
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
