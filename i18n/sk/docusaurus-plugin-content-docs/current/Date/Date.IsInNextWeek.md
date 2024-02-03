---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


## Description

Označuje, či sa tento dátum vyskytuje počas nasledujúceho týždňa, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho týždňa.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas nasledujúceho týždňa, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho týždňa.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa týždeň po aktuálnom systémovom čase nachádza v nasledujúcom týždni.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
