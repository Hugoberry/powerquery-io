---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Indica se este datetime ocorre durante o próximo número de minutos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no minuto atual.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o próximo número de minutos, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no minuto atual.      <ul>      <li><code>dateTime</code>: um valor de <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>minutes</code>: o número de minutos.</li>      </ul>


## Examples

### Example #1 
Determinar se o minuto após o horário atual do sistema está nos próximos dois minutos.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
