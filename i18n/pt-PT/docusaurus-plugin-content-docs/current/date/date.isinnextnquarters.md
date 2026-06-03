---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Indica se esta data ocorre durante o número de trimestres seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no trimestre atual.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica se o valor do datetime indicado `dateTime` ocorre durante o próximo número de trimestres, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no trimestre atual.

-   `dateTime`: um valor `date`, `datetime` ou `datetimezone` a ser avaliado.
-   `quarters`: o número de trimestres.


## Examples

### Example #1
Determinar se o trimestre a seguir à hora atual do sistema é nos próximos dois trimestres.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
