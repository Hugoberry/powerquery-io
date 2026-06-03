---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indica se esta data ocorre durante o dia atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado `dateTime` ocorre durante o dia atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se a hora do sistema atual ocorre no dia atual.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
