---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


Indica se esta data ocorre durante o número de meses anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o número de meses anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no mês atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>months</code>: o número de meses.</li>      </ul>


## Examples

### Example #1 
Determina se o mês anterior à hora atual do sistema é nos dois meses anteriores.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
