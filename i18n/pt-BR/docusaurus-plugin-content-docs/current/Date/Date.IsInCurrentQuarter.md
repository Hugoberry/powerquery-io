---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Indica se essa data ocorre durante o trimestre atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o trimestre atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: Um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determine se a hora atual do sistema ocorre no trimestre atual.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
