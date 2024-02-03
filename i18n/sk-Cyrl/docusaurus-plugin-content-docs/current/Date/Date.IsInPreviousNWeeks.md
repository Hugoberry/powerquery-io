---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Označuje, či sa tento dátum vyskytuje počas určitého počtu predchádzajúcich týždňov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho týždňa.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas určitého počtu predchádzajúcich týždňov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho týždňa.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      <li><code>weeks</code>: Počet týždňov.</li>      </ul>


## Examples

### Example #1 
Určite, či sa týždeň pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch týždňoch.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
