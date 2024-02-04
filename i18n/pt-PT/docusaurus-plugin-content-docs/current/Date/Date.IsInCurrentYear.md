---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Indica se esta data ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor datetime especificado <code>dateTime</code> ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora do sistema atual ocorre no ano atual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
