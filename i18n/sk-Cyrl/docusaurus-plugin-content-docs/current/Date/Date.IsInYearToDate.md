---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Udáva, či tento dátum pripadá na aktuálny rok a či sa nachádza v aktuálnom dni alebo pred ním, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> pripadá na aktuálny rok a či sa nachádza v aktuálnom dni alebo pred ním, podľa určenia na základe aktuálneho dátumu a času v systéme.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa aktuálny systémový čas nachádza v dátume od začiatku roka.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
