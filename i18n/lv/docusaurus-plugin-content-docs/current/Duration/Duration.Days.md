---
title: Duration.Days
---

# Duration.Days


## Description

Atgriež ilguma dienu daļu.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Atgriež<code>duration</code> dienu vērtību.


## Examples

### Example #1 
Izvelk dienu skaitu starp diviem datumiem.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
