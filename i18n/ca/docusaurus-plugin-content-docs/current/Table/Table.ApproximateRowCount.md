---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Retorna el nombre aproximat de files de la taula.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Retorna el nombre aproximat de files de <code>table</code> o un error si l'origen de dades no admet l'aproximació.


## Examples

### Example #1 
Calcula el nombre de combinacions diferents de ciutat i estat en una taula gran, que es pot utilitzar com a estimació de cardinalitat per a les columnes. Les estimacions de cardinalitat són prou importants com perquè diversos orígens de dades (com ara l’SQL Server) admetin aquesta aproximació en particular, sovint mitjançant un algoritme anomenat HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
