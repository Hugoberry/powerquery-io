---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indica se esta data ocorre durante o ano atual e se recai no dia atual ou antes dele, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor datetime especificado `dateTime` ocorre durante o ano atual e se recai no dia atual ou antes dele, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a avaliar.


## Examples

### Example #1
Determinar se a hora do sistema atual ocorre no ano até à data.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
