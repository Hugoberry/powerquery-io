---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

Označuje, jestli tato hodnota datetime spadá do určitého počtu následujících hodin vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální hodiny.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu následujících hodin vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální hodiny.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      <li><code>hours</code>: Počet hodin.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli hodina následující po hodině určené aktuálním systémovým časem spadá do příštích dvou hodin.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
