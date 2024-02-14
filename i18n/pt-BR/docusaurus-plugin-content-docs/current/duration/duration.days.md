---
title: Duration.Days
---

# Duration.Days


Retorna a parte de dias de uma duração.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Retorna a parte de dias do <code>duration</code>.


## Examples

### Example #1 
Extraia o número de dias entre duas datas.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
