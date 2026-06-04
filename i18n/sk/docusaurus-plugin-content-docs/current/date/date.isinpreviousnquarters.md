---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Označuje, či sa tento dátum vyskytuje počas určitého počtu predchádzajúcich štvrťrokov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho štvrťroka.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Označuje, či sa zadaná hodnota dátumu a času `dateTime` vyskytuje počas určitého počtu predchádzajúcich štvrťrokov, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálneho štvrťroka.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.
-   `quarters`: Počet štvrťrokov.


## Examples

### Example #1
Určite, či sa štvrťrok pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch štvrťrokoch.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
