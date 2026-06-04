---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Označuje, či sa tento dátum a čas vyskytuje počas určitého počtu nasledujúcich hodín, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej hodiny.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Označuje, či sa zadaná hodnota dátumu a času `dateTime` vyskytuje počas určitého počtu nasledujúcich hodín, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej hodiny.

-   `dateTime`: Hodnota `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.
-   `hours`: Počet hodín.


## Examples

### Example #1
Určte, či sa hodina po aktuálnom systémovom čase nachádza v nasledujúcich dvoch hodinách.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
