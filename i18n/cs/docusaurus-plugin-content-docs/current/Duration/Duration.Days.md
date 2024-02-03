---
title: Duration.Days
---

# Duration.Days


## Description

Vrátí denní část doby trvání.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Vrátí denní část z <code>duration</code>.


## Examples

### Example #1 
Extrahuje počet dní mezi dvěma daty.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
