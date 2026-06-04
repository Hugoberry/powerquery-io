---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Označuje, jestli tato hodnota datetime spadá do předchozí sekundy vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální sekundy.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do předchozí sekundy vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální sekundy.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určuje, jestli sekunda předcházející sekundě určené aktuálním systémovým časem spadá do předchozí sekundy.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
