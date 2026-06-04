---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


Označuje, či sa tento dátum a čas vyskytuje počas určitého počtu predchádzajúcich minút, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej minúty.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Označuje, či sa zadaná hodnota dátumu a času `dateTime` vyskytuje počas určitého počtu predchádzajúcich minút, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej minúty.

-   `dateTime`: Hodnota `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.
-   `minutes`: Počet minút.


## Examples

### Example #1
Určte, či sa minúta pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch minútach.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
