---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Označuje, jestli tato hodnota datetime spadá do předchozí hodiny vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální hodiny.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do předchozí hodiny vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální hodiny.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určuje, jestli hodina předcházející hodině určené aktuálním systémovým časem spadá do předchozí hodiny.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
