---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Udáva, či tento dátum pripadá na aktuálny deň, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> pripadá na aktuálny deň, podľa určenia na základe aktuálneho dátumu a času v systéme.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa aktuálny systémový čas nachádza v aktuálnom dni.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
