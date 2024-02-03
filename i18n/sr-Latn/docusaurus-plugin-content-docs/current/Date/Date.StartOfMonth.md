---
title: Date.StartOfMonth
---

# Date.StartOfMonth


## Description

Vraća početak meseca.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Details

Vraća početak meseca koji sadrži <code>dateTime</code>.    <code>dateTime</code> mora da bude vrednost <code>date</code> ili <code>datetime</code>.


## Examples

### Example #1 
Pronađite početak meseca za 10. oktobar 2011. u 08:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
