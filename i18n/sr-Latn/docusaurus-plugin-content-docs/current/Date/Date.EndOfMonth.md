---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Vraća kraj meseca.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Vraća kraj meseca koji sadrži <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Vrednost <code>date</code>, <code>datetime</code> ili <code>datetimezone</code> na osnovu koje se izračunava kraj meseca</li>      </ul>


## Examples

### Example #1 
Izračunavanje kraja meseca za 14.5.2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Izračunavanje kraja meseca za 17.5.2011, 17:00:00 -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
