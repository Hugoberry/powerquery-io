---
title: Duration.Days
---

# Duration.Days


Mengembalikan bahagian hari bagi tempoh.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Mengembalikan bahagian hari bagi `duration`.


## Examples

### Example #1
Ekstrak bilangan hari antara dua tarikh.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
