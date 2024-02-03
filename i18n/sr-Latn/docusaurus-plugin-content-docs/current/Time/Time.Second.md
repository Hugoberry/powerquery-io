---
title: Time.Second
---

# Time.Second


## Description

Vraća komponentu sekunde.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Vraća komponentu sekunde navedene vrednosti <code>time</code>, <code>datetime</code> ili <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
Pronađite vrednost sekunde na osnovu vrednosti datuma i vremena.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
