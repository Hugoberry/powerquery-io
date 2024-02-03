---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Indica se esta data ocorre durante o próximo número de semanas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o próximo número de semanas, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra na semana atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>weeks</code>: o número de semanas.</li>      </ul>


## Examples

### Example #1 
Determina se o semana após a hora atual do sistema é nas próximas duas semanas.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
