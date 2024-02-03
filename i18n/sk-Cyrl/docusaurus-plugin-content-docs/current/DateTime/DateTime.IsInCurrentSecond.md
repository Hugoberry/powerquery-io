---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


## Description

Udáva, či tento dátum a čas pripadá na aktuálnu sekundu, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Details

Udáva, či daná hodnota dátumu a času <code>dateTime</code> pripadá na aktuálnu sekundu, podľa určenia na základe aktuálneho dátumu a času v systéme.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa aktuálny systémový čas nachádza v aktuálnej sekunde.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
