---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Indica se este datetime ocorre durante o próximo número de horas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o próximo número de horas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na hora atual.      <ul>      <li><code>dateTime</code>: um valor de <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>hours</code>: o número de horas.</li>      </ul>


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
