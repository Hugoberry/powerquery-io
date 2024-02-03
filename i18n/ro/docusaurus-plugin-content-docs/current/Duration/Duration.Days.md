---
title: Duration.Days
---

# Duration.Days


## Description

Returnează porțiunea de zile dintr-o durată.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Returnează porțiunea de zile din <code>duration</code>.


## Examples

### Example #1 
Extrageți numărul de zile dintre două date.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
