---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Označuje, jestli tato hodnota datetime spadá do určitého počtu následujících minut vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do určitého počtu následujících minut vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.
-   `minutes`: Počet minut.


## Examples

### Example #1
Určuje, jestli minuta následující po minutě určené aktuálním systémovým časem spadá do příštích dvou minut.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
