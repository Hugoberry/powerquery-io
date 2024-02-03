---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


## Description

Udáva, či tento dátum a čas pripadá na aktuálnu minútu, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> pripadá na aktuálnu minútu, podľa určenia na základe aktuálneho dátumu a času v systéme.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa aktuálny systémový čas nachádza v aktuálnej minúte.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
