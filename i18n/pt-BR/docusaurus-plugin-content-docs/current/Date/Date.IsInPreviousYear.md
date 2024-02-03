---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

Indica se esta data ocorre durante o ano anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no ano atual.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o ano anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no ano atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determine se o ano antes da hora atual do sistema é o ano anterior.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
