---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


## Description

Označuje, či sa tento dátum a čas vyskytuje počas nasledujúcej minúty, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej minúty.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Details

Označuje, či sa zadaná hodnota dátumu a času <code>dateTime</code> vyskytuje počas nasledujúcej minúty, ako je určené aktuálnym dátumom a časom v systéme. Všimnite si, že táto funkcia vráti hodnotu false, keď je jej odovzdaná hodnota, ktorá sa vyskytuje v rámci aktuálnej minúty.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> alebo <code>datetimezone</code>, ktorá sa má vyhodnotiť.</li>      </ul>


## Examples

### Example #1 
Určte, či sa minúta po aktuálnom systémovom čase nachádza v nasledujúcej minúte.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
