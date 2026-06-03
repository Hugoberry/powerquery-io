---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Indica se este datetime ocorre durante o minuto seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no minuto atual.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o minuto seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no minuto atual.

-   `dateTime`: um valor de `datetime` ou `datetimezone` a ser avaliado.


## Examples

### Example #1
Determinar se o minuto após o horário atual do sistema está no próximo minuto.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
