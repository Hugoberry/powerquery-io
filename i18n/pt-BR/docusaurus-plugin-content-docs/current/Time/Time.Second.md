---
title: Time.Second
---

# Time.Second


Retorna o componente de segundo.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Retorna o componente de segundo do valor <code>time</code>, <code>datetime</code> ou <code>datetimezone</code> fornecido, <code>dateTime</code>.


## Examples

### Example #1 
Localize o segundo valor por meio do valor datetime.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
