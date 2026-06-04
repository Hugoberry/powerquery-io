---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Označuje, či sa tento dátum vyskytuje počas predchádzajúceho roka, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho roka.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Označuje, či sa zadaná hodnota dátumu a času `dateTime` vyskytuje počas predchádzajúceho roka, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho roka.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.


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
