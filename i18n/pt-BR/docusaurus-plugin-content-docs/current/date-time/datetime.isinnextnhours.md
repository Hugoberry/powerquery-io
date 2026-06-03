---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Indica se este datetime ocorre durante o próximo número de horas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o próximo número de horas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.

-   `dateTime`: um valor de `datetime` ou `datetimezone` a ser avaliado.
-   `hours`: o número de horas.


## Examples

### Example #1
Determinar se a hora após o horário atual do sistema está nas próximas duas horas.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
