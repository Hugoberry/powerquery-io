---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


## Description

Menghasilkan awal kuartal.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Details

Mengembalikan awal kuartal yang berisi <code>dateTime</code>.      <code>dateTime</code> harus berupa <code>date</code>, <code>datetime</code>, atau <code>datetimezone</code> value.


## Examples

### Example #1 
Temukan awal kuartal untuk 10 Oktober 2011, 08.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
