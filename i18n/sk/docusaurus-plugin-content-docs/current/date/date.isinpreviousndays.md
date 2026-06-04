---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


Označuje, či sa tento dátum vyskytuje počas určitého počtu predchádzajúcich dní, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho dňa.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Označuje, či sa zadaná hodnota dátumu a času `dateTime` vyskytuje počas určitého počtu predchádzajúcich dní, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho dňa.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.
-   `days`: Počet dní.


## Examples

### Example #1
Určite, či sa deň pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch dňoch.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
