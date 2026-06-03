---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indica se esta data ocorre durante o número de anos seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no ano atual.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o próximo número de anos, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no ano atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `years`: o número de anos.


## Examples

### Example #1
Determinar se o ano a seguir à hora atual no sistema é nos próximos dois anos.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
