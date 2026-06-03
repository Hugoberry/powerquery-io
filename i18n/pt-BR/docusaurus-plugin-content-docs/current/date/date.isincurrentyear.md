---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indica se essa data ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.

-   `dateTime`: Um valor `date`, `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determine se a hora atual do sistema ocorre no ano atual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
