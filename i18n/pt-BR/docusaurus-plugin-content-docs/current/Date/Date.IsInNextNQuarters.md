---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Indica se esta data ocorre durante o próximo número de trimestres, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o próximo número de trimestres, conforme a determinação da data e hora atuais no sistema. Observe que essa função retornará false quando for passado um valor que ocorra no trimestre atual.      <ul>      <li><code>dateTime</code>: um valor de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      <li><code>quarters</code>: o número de trimestres.</li>      </ul>


## Examples

### Example #1 
Determina se o trimestre após a hora atual do sistema é nos próximos dois trimestres.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
