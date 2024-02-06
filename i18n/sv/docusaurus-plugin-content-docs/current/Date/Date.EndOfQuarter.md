---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Returnerar slutet på kvartalet.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Returnerar  slutet av kvartalet som innehåller <code>dateTime</code>. Tidszonsinformation bevaras.      <ul>      <li><code>dateTime</code>: Ett <code>date</code>-, <code>datetime</code>- eller <code>datetimezone</code>-värde som kvartalets slut beräknas från.</li>      </ul>


## Examples

### Example #1 
Hitta kvartalets slut för den 10 oktober 2011 08:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
