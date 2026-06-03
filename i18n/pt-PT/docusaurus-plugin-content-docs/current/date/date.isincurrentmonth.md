---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Indica se esta data ocorre durante o mês atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado `dateTime` ocorre durante o mês atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se a hora do sistema atual ocorre no mês atual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
