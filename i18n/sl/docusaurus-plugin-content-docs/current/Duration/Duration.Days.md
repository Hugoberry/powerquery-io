---
title: Duration.Days
---

# Duration.Days


## Description

Vrne del dni za trajanje.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Vrne del dni za<code>duration</code>.


## Examples

### Example #1 
Izvlecite število dni med dvema datumoma.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
