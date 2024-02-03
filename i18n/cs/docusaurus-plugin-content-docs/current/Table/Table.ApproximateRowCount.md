---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Vrátí přibližný počet řádků v tabulce.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Vrátí přibližný počet řádků v <code>table</code> nebo chybu, pokud zdroj dat nepodporuje aproximaci.


## Examples

### Example #1 
Odhadněte počet různých kombinací města a státu ve velké tabulce, kterou lze použít jako odhad mohutnosti pro sloupce. Odhady mohutnosti jsou natolik důležité, že různé zdroje dat (jako je SQL Server) podporují tuto konkrétní aproximaci, často pomocí algoritmu zvaného HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
