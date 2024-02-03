---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Označuje, či sa tento dátum vyskytuje počas určitého počtu predchádzajúcich mesiacov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho mesiaca.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas určitého počtu predchádzajúcich mesiacov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho mesiaca.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      <li><code>months</code>: Počet mesiacov.</li>      </ul>


## Examples

### Example #1 
Určite, či sa mesiac pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch mesiacoch.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
