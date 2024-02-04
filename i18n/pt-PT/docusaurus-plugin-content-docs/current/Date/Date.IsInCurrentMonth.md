---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Indica se esta data ocorre durante o mês atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Indica se o valor datetime especificado <code>dateTime</code> ocorre durante o mês atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora do sistema atual ocorre no mês atual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
