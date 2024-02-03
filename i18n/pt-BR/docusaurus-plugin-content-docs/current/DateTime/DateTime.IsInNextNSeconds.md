---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

Indica se este datetime ocorre durante o próximo número de segundos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no segundo atual.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o próximo número de segundos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no segundo atual.      <ul>      <li><code>dateTime</code>: um valor de <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>seconds</code>: o número de segundos.</li>      </ul>


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
