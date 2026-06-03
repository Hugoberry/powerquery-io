---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indica se essa data ocorre durante o ano atual e no ou antes do dia atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o ano atual e no ou antes do dia atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: Um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se a hora atual do sistema ocorre desde o início do ano.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
