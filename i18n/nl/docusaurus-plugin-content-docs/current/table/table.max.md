---
title: Table.Max
---

# Table.Max


Retourneert met behulp van de opgegeven criteria de grootste rij of de standaardwaarde.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Retourneert aan de hand van de `comparisonCriteria` de grootste rij in de `table`. Als de tabel leeg is, wordt de optionele waarde `default` geretourneerd.


## Examples

### Example #1
De rij met de grootste waarde in kolom \[a\] in de tabel `({[a = 2, b = 4], [a = 6, b = 8]})` zoeken.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2
De rij met de grootste waarde in kolom \[a\] in de tabel `({})` zoeken. Als de rij leeg is, wordt -1 geretourneerd.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
