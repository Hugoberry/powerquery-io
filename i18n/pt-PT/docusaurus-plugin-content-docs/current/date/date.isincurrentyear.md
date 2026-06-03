---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indica se esta data ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado `dateTime` ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se a hora do sistema atual ocorre no ano atual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
