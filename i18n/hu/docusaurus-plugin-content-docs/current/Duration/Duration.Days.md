---
title: Duration.Days
---

# Duration.Days


## Description

Egy időtartam naprészét adja vissza.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

A(z) <code>duration</code> naprészét adja vissza.


## Examples

### Example #1 
A két dátum közötti napok számának kivonása.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
