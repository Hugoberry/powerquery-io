---
title: Duration.Days
---

# Duration.Days


## Description

Devolve a parte dos días dunha duración.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Devolve a parte dos días de <code>duration</code>.


## Examples

### Example #1 
Extrae o número de días entre dúas datas.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
