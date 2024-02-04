---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Indica se esta data ocorre durante o mês anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver &#34;falso&#34; quando é transmitido um valor que ocorre no mês atual.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Indica se o valor do datetime indicado <code>dateTime</code> ocorre durante o mês anterior, conforme determinado pela data e hora atuais no sistema. Tenha em conta que esta função irá devolver "falso" quando é transmitido um valor que ocorre no mês atual.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determinar se o mês anterior à hora do sistema atual ocorre no mês anterior.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
