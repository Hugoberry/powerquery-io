---
title: Time.Second
---

# Time.Second


## Description

Devolve o componente de segundos.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Devolve o componente de segundos do valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Encontrar o valor dos segundos a partir de um valor datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
