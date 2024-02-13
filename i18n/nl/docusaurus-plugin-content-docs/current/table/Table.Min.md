---
title: Table.Min
---

# Table.Min


Retourneert met behulp van de opgegeven criteria de kleinste rij of een standaardwaarde.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retourneert aan de hand van de <code>comparisonCriteria</code> de kleinste rij in de <code>table</code>. Als de tabel leeg is, wordt de optionele waarde <code>default</code> geretourneerd.


## Examples

### Example #1 
De rij met de kleinste waarde in kolom [a] in de tabel zoeken.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
De rij met de kleinste waarde in kolom [a] in de tabel zoeken. Als de rij leeg is, wordt -1 geretourneerd.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
