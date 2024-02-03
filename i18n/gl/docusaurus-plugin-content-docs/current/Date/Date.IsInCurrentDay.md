---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Indica se esta data ocorre durante o día actual, como o determina a data e a hora actual do sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Indica se o valor de data e hora <code>dateTime</code> indicado ocorre durante o día actual, como o determina a data e a hora actual do sistema.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> que se vai avaliar.</li>      </ul>


## Examples

### Example #1 
Determinar se a hora actual do sistema está no día actual.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date