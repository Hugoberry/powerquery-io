---
title: Duration.Days
---

# Duration.Days


## Description

Vraća deo trajanja u danima.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Vraća deo trajanja <code>duration</code> u danima.


## Examples

### Example #1 
Izdvojite broj dana između dva datuma.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
