---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Označuje, či sa tento dátum vyskytuje počas určitého počtu predchádzajúcich týždňov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho týždňa.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Označuje, či sa zadaná hodnota dátumu a času `dateTime` vyskytuje počas určitého počtu predchádzajúcich týždňov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho týždňa.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.
-   `weeks`: Počet týždňov.


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
