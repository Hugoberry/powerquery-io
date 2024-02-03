---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

Retorna un registre que conté les parts del valor datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

Retorna un registre que conté les parts del valor datetime proporcionat, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: valor <code>datetime</code> a partir del qual s'ha de calcular el registre de les seves parts.</li>      </ul>


## Examples

### Example #1 
Converteix el valor &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; en un registre que conté els valors de data i hora.
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
