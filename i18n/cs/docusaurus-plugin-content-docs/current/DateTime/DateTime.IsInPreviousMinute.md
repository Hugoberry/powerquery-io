---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


## Description

Označuje, jestli tato hodnota datetime spadá do předchozí minuty vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do předchozí minuty vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli minuta předcházející minutě určené aktuálním systémovým časem spadá do předchozí minuty.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
