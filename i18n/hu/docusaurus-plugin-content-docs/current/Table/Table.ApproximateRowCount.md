---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Visszaadja a táblában található sorok hozzávetőleges számát.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

A(z) <code>table</code> sorainak hozzávetőleges számát adja vissza, vagy hibát, ha az adatforrás nem támogatja a közelítést.


## Examples

### Example #1 
A település és az állam különböző kombinációinak becslése egy nagy táblában, amely számosságbecslésként használható az oszlopokhoz. A számosságbecslések elég fontosak ahhoz, hogy a különböző adatforrások (például SQL Server) támogatják ezt a konkrét közelítést, gyakran a HyperLogLog nevű algoritmust használva.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
