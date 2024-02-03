---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

Returnează sfârșitul trimestrului.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

Returnează sfârșitul trimestrului care conține <code>dateTime</code>. Informațiile legate de fusul orar sunt păstrate.      <ul>      <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din care este calculat sfârșitul trimestrului.</li>      </ul>


## Examples

### Example #1 
Găsiți sfârșitul trimestrului pentru 10 octombrie 2011, 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
