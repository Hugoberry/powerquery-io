---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


## Description

Označuje, či sa tento dátum a čas vyskytuje počas predchádzajúcej sekundy, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej sekundy.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas predchádzajúcej sekundy, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej sekundy.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa sekunda pred aktuálnym systémovým časom nachádza v predchádzajúcej sekunde.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
