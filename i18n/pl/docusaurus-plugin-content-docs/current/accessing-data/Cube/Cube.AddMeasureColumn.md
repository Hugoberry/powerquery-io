---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Dodaje kolumnę do modułu zawierającego wyniki miary zastosowanej w kontekście wiersza dla każdego wiersza.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Dodaje kolumnę o nazwie <code>column</code> do modułu <code>cube</code> zawierającego wyniki miary <code>measureSelector</code> zastosowanej w kontekście wiersza dla każdego wiersza. Zmiany w poziomie szczegółowości i fragmentacji wymiarów mają wpływ na stosowanie miary. Wartości miary zostaną dostosowane po wykonaniu pewnych operacji modułu.



## Category
Cube
