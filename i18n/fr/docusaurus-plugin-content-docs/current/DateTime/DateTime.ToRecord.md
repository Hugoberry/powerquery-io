---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Retourne un enregistrement qui contient les parties de la valeur datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Retourne un enregistrement qui contient les parties de la valeur datetime spécifiée, <code>dateTime</code>. <ul>        <li><code>dateTime</code> : valeur <code>datetime</code> à partir de laquelle l'enregistrement des parties doit être calculé.</li>      </ul>


## Examples

### Example #1 
Convertit la valeur &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; dans un enregistrement contenant les valeurs Date et Time.
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
