---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Returnează sfârșitul anului.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

Returnează sfârșitul anului care conține <code>dateTime</code>, inclusiv secundele fracționare. Informațiile legate de fusul orar sunt păstrate.      <ul>        <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>, din care este calculat sfârșitul anului.</li>      </ul>


## Examples

### Example #1 
Aflaţi sfârşitul anului pentru 14/05/2011 17:00:00.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
Aflaţi sfârşitul orei pentru 17/05/2011 17:00:00 – 7:00.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
