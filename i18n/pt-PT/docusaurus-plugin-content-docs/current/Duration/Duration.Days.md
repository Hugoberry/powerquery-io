---
title: Duration.Days
---

# Duration.Days


## Description

Devolve a parte dos dias de uma duração.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Devolve a parte dos dias de <code>duration</code>.


## Examples

### Example #1 
Extrair o número de dias entre duas datas.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
