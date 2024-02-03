---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Označuje, či sa tento dátum a čas vyskytuje počas predchádzajúcej hodiny, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej hodiny.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas predchádzajúcej hodiny, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej hodiny.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa hodina pred aktuálnym systémovým časom nachádza v predchádzajúcej hodine.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
