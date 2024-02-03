---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

Indica se esta data ocorre durante o próximo número de dias, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no dia atual.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o próximo número de dias, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no dia atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>days</code>: o número de dias.</li>      </ul>


## Examples

### Example #1 
Determina se o dia após a hora atual do sistema é nos próximos dois dias.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
