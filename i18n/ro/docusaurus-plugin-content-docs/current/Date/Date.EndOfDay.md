---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Returnează sfârșitul zilei.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

Returnează sfârșitul trimestrului reprezentat de <code>dateTime</code>. Informațiile legate de fusul orar sunt păstrate.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din care este calculat sfârșitul zilei.</li>      </ul>


## Examples

### Example #1 
Aflaţi sfârşitul zilei pentru 14/05/2011 17:00:00.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
Aflaţi sfârşitul zilei pentru 17/05/2011 17:00:00 – 7:00.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
