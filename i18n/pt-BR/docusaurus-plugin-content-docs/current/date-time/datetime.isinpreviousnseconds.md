---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Indica se este datetime ocorre durante o número de segundos anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no segundo atual.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado `dateTime` ocorre durante o número de segundos anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no segundo atual.

-   `dateTime`: um valor de `datetime` ou `datetimezone` a ser avaliado.
-   `seconds`: o número de segundos.


## Examples

### Example #1
Determinar se o segundo antes do horário atual do sistema está nos dois segundos anteriores.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
