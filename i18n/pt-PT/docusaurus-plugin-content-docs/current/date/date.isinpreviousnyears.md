---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


Indica se esta data ocorre durante o número de anos anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no ano atual.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o número de anos anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no ano atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `years`: o número de anos.


## Examples

### Example #1
Determinar se o ano anterior à hora no sistema atual é nos dois últimos anos.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
