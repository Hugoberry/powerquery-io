---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Retourne un enregistrement qui contient les parties de la valeur datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Retourne un enregistrement qui contient les parties de la valeur datetimezone spécifiée, <code>dateTimeZone</code>. <ul>        <li><code>dateTimeZone</code> : valeur <code>datetimezone</code> à partir de laquelle l'enregistrement des parties doit être calculé.</li>      </ul>


## Examples

### Example #1 
Convertit la valeur &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; dans un enregistrement contenant les valeurs Date, Time et Zone.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
