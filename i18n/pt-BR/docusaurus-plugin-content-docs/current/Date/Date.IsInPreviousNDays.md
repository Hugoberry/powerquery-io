---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Indica se esta data ocorre durante o número de dias anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no dia atual.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o número de dias anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no dia atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>days</code>: o número de dias.</li>      </ul>


## Examples

### Example #1 
Determina se o dia anterior à hora atual do sistema é nos dois dias anteriores.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
