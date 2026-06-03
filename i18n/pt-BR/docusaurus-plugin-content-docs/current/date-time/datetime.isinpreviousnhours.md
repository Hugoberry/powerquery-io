---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indica se este datetime ocorre durante o número de horas anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o número de horas anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.

-   `dateTime`: um valor de `datetime` ou `datetimezone` a ser avaliado.
-   `hours`: o número de horas.


## Examples

### Example #1
Determinar se a hora antes do horário atual do sistema está nas duas horas anteriores.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
