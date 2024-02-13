---
title: Table.MinN
---

# Table.MinN


Retourneert met behulp van de opgegeven criteria de kleinste rij of rijen.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Retourneert aan de hand van de <code>comparisonCriteria</code> de kleinste rij of rijen in de <code>table</code>. Als de rijen zijn gesorteerd, moet de parameter <code>countOrCondition</code> worden opgegeven om het resultaat verder te filteren. Het sorteeralgoritme kan geen vast gesorteerd resultaat garanderen. De parameter <code>countOrCondition</code> kan diverse vormen aannemen:    <ul>        <li> Als er een getal wordt opgegeven, wordt er een lijst met maximaal <code>countOrCondition</code> items in oplopende volgorde geretourneerd. </li>        <li> Als er een voorwaarde wordt opgegeven, wordt er een lijst met items geretourneerd die in eerste instantie aan die voorwaarde voldoen. Wanneer een item niet aan die voorwaarde voldoet, stopt de bewerking. </li> </ul>


## Examples

### Example #1 
De rij met de kleinste waarde in kolom [a] met de voorwaarde [a] &gt; 3 in de tabel zoeken. De rijen worden gesorteerd voordat het filter wordt toegepast.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
De rij met de kleinste waarde in kolom [a] met de voorwaarde [b] &gt; 0 in de tabel zoeken. De rijen worden gesorteerd voordat het filter wordt toegepast.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
