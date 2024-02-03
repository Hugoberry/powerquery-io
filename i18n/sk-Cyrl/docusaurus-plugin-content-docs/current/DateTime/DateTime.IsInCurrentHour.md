---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Udáva, či tento dátum a čas pripadá na aktuálnu hodinu, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> pripadá na aktuálnu hodinu, podľa určenia na základe aktuálneho dátumu a času v systéme.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa aktuálny systémový čas nachádza v aktuálnej hodine.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
