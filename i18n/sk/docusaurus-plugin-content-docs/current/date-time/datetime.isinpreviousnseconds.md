---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


Označuje, či sa tento dátum a čas vyskytuje počas určitého počtu predchádzajúcich sekúnd, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej sekundy.


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Označuje, či sa zadaná hodnota dátumu a času `dateTime` vyskytuje počas určitého počtu predchádzajúcich sekúnd, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej sekundy.

-   `dateTime`: Hodnota `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.
-   `seconds`: Počet sekúnd.


## Examples

### Example #1
Určte, či sa sekunda pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch sekundách.
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
