---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Označuje, či sa tento dátum vyskytuje počas nasledujúceho štvrťroka, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho štvrťroka.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas nasledujúceho štvrťroka, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho štvrťroka.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa štvrťrok po aktuálnom systémovom čase nachádza v nasledujúcom štvrťroku.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
