---
title: Duration.Days
---

# Duration.Days


Zwraca część dni czasu trwania.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Zwraca część dni w liczbie: <code>duration</code>.


## Examples

### Example #1 
Wyodrębnij liczbę dni między dwiema datami.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
