---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Indica se este datetime ocorre durante o próximo número de segundos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no segundo atual.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o próximo número de segundos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no segundo atual.

-   `dateTime`: um valor de `datetime` ou `datetimezone` a ser avaliado.
-   `seconds`: o número de segundos.


## Examples

### Example #1
Determinar se o segundo após o horário atual do sistema está nos próximos dois segundos.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
