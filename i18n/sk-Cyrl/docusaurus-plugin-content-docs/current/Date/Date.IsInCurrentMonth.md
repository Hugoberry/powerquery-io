---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Udáva, či tento dátum pripadá na aktuálny mesiac, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> pripadá na aktuálny mesiac, podľa určenia na základe aktuálneho dátumu a času v systéme.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa aktuálny systémový čas nachádza v aktuálnom mesiaci.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
