---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Indica se este datetime ocorre durante o minuto seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no minuto atual.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o minuto seguinte, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no minuto atual.      <ul>      <li><code>dateTime</code>: um valor de <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


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
