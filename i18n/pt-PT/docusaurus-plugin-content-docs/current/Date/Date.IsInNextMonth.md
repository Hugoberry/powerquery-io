---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

Indica se esta data ocorre durante o mês seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre no mês atual.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o mês seguinte, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no mês atual.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se o mês posterior à hora do sistema atual ocorre no mês seguinte.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
