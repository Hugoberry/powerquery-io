---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Vrne približno število vrstic v tabeli.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Vrne približno število vrstice v <code>table</code>ali napako, če vir podatkov ne podpira približne vrednosti.


## Examples

### Example #1 
Ocenite število različnih kombinacij mest in stanje v veliki tabela, ki jih je mogoče uporabiti kot oceno kardinalnost za oznake stolpcev. Ocene kardinalnosti so dovolj pomembne, da različni viri podatki (na primer SQL Server) podpora ta približni približek, pogosto pa uporabljajo algoritem, imenovan HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
