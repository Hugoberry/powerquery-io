---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Označuje, či sa tento dátum vyskytuje počas určitého počtu predchádzajúcich rokov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho roka.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas určitého počtu predchádzajúcich rokov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho roka.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      <li><code>years</code>: Počet rokov.</li>      </ul>


## Examples

### Example #1 
Určite, či sa rok pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch rokoch.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
