---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Returnează sfârșitul lunii.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Returnează sfârșitul lunii care conține <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din care este calculat sfârșitul lunii</li>      </ul>


## Examples

### Example #1 
Aflaţi sfârşitul lunii pentru 14/05/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Aflaţi sfârşitul lunii pentru 17/05/2011 17:00:00 PM – 7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
