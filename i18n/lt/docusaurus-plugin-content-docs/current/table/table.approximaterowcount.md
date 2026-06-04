---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


Pateikiamas apytikslis eilučių skaičius lentelėje.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

Pateikiamas apytikslis eilučių skaičius `table` arba klaida, jei duomenų šaltinis nepalaiko apytikslio įvertinimo.


## Examples

### Example #1
Apskaičiuokite skirtingų miesto ir šalies derinių didelėje lentelėje skaičių, kuris gali būti naudojamas kaip stulpelių kardinalumo įvertinimas. Kardinalumo įvertinimai yra pakankamai svarbūs, kad įvairūs duomenų šaltiniai (pvz., „SQL Server“) palaikytų šį konkretų apytikslį įvertinimą, dažnai naudojant algoritmą, vadinamą „HyperLogLog“.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
