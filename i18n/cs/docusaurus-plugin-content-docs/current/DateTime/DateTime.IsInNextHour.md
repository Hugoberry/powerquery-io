---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Označuje, jestli tato hodnota datetime spadá do příští hodiny vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální hodiny.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do příští hodiny vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální hodiny.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli hodina následující po hodině určené aktuálním systémovým časem spadá do příští hodiny.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
