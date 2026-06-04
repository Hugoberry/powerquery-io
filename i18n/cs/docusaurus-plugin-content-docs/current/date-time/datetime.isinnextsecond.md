---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


Označuje, jestli tato hodnota datetime spadá do příští sekundy vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální sekundy.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do příští sekundy vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální sekundy.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určuje, jestli sekunda následující po sekundě určené aktuálním systémovým časem spadá do příští sekundy.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
