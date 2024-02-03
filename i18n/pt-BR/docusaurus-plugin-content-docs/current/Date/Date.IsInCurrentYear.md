---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Indica se essa data ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o ano atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: Um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determine se a hora atual do sistema ocorre no ano atual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
