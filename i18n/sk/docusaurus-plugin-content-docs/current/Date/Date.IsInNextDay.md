---
title: Date.IsInNextDay
---

# Date.IsInNextDay


## Description

Označuje, či sa tento dátum vyskytuje počas nasledujúceho dňa, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho dňa.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas nasledujúceho dňa, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho dňa.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa deň po aktuálnom systémovom čase nachádza v nasledujúcom dni.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
