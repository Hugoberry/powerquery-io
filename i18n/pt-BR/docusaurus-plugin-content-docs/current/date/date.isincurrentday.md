---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indica se essa data ocorre durante o dia atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o dia atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: Um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se a hora atual do sistema ocorre no dia atual.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
