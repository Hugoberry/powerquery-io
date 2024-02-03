---
title: Duration.Days
---

# Duration.Days


## Description

Retorna la part de dies d&#39;una duració.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Retorna la part de dies de <code>duration</code>.


## Examples

### Example #1 
Extreu el nombre de dies entre dues dates.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
