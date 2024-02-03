---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


## Description

Označuje, či sa tento dátum vyskytuje počas predchádzajúceho roka, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho roka.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas predchádzajúceho roka, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho roka.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa rok pred aktuálnym systémovým časom nachádza v predchádzajúcom roku.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
