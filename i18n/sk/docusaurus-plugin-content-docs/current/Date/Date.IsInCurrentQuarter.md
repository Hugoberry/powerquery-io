---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Udáva, či tento dátum pripadá na aktuálny štvrťrok, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> pripadá na aktuálny štvrťrok, podľa určenia na základe aktuálneho dátumu a času v systéme.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa aktuálny systémový čas nachádza v aktuálnom štvrťroku.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
