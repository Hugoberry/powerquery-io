---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Mengembalikan penghujung bulan.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Mengembalikan penghujung bulan yang mengandungi <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Nilai <code>date</code>, <code>datetime</code> atau <code>datetimezone</code> untuk mengira penghujung bulan</li>      </ul>


## Examples

### Example #1 
Dapatkan penghujung bulan untuk 5/14/2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Dapatkan penghujung bulan untuk 5/17/2011 05:00:00 PM -7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
