---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Označuje, či sa tento dátum a čas vyskytuje počas určitého počtu predchádzajúcich hodín, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej hodiny.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas určitého počtu predchádzajúcich hodín, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej hodiny.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      <li><code>hours</code>: Počet hodín.</li>      </ul>


## Examples

### Example #1 
Určte, či sa hodina pred aktuálnym systémovým časom nachádza v predchádzajúcich dvoch hodinách.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
