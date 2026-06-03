---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Indica se este datetime ocorre durante a hora seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante a hora seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.

-   `dateTime`: um valor de `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se a hora após o horário atual do sistema está na próxima hora.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
