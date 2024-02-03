---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Indica se essa data ocorre durante o mês atual, conforme determinado pela data e hora atuais do sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o mês atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: Um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determine se a hora atual do sistema ocorre no mês atual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
