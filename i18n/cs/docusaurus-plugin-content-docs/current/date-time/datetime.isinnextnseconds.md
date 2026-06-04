---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Označuje, jestli tato hodnota datetime spadá do určitého počtu následujících sekund vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální sekundy.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do určitého počtu následujících sekund vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální sekundy.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.
-   `seconds`: Počet sekund.


## Examples

### Example #1
Určuje, jestli sekunda následující po sekundě určené aktuálním systémovým časem spadá do příštích dvou sekund.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
