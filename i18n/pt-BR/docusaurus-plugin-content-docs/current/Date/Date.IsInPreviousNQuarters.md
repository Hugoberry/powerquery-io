---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

Indica se esta data ocorre durante o número de trimestres anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o número de trimestres anterior, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>quarters</code>: o número de trimestres.</li>      </ul>


## Examples

### Example #1 
Determina se o trimestre anterior à hora atual do sistema é nos dois trimestres anteriores.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
