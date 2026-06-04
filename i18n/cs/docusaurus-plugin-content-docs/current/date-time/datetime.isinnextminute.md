---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Označuje, jestli tato hodnota datetime spadá do příští minuty vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do příští minuty vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určuje, jestli minuta následující po minutě určené aktuálním systémovým časem spadá do příští minuty.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
