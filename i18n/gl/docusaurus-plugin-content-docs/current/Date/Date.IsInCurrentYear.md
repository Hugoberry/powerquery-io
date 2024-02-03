---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


## Description

Indica se esta data ocorre durante o ano actual, como o determina a data e a hora actual do sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Details

Indica se o valor de data e hora <code>dateTime</code> indicado ocorre durante o ano actual, como o determina a data e a hora actual do sistema.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se vai avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora actual do sistema está no ano actual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
