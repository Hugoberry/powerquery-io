---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Indica se essa data ocorre durante o ano atual e no ou antes do dia atual, conforme determinado pela data e hora atuais no sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Indica se o valor de datetime especificado <code>dateTime</code> ocorre durante o ano atual e no ou antes do dia atual, conforme determinado pela data e hora atuais no sistema.      <ul>      <li><code>dateTime</code>: Um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a ser avaliado.</li>      </ul>


## Examples

### Example #1 
Determine se a hora atual do sistema ocorre desde o início do ano.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
