---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Vráti približný počet riadkov v tabuľke.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Vráti približný počet riadkov v <code>table</code> alebo chybu, ak zdroj údajov nepodporuje odhad.


## Examples

### Example #1 
Odhadne počet jedinečných kombinácií mesta a štátu vo veľkej tabuľke, ktorú možno použiť ako odhad kardinality pre stĺpce. Odhady kardinality sú dostatočne dôležité, aby rôzne zdroje údajov (ako napríklad SQL Server) podporujú tento konkrétny odhad, často pomocou algoritmu s názvom HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
