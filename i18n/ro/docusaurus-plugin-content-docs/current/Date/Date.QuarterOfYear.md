---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Returnează un număr care indică în ce trimestru al anului cade data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Returnează un număr de la 1 la 4 care indică în ce trimestru al anului cade data <code>dateTime</code>. <code>dateTime</code> poate fi o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code>.


## Examples

### Example #1 
Găsiţi în ce trimestru al anului cade data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
