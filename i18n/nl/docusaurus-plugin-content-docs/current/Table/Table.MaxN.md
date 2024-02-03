---
title: Table.MaxN
---

# Table.MaxN


## Description

Retourneert met behulp van de opgegeven criteria de grootste rij of rijen.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Hiermee wordt/worden de grootste rij(en) in de <code>table</code> geretourneerd, waarbij de <code>comparisonCriteria</code> is opgegeven. Nadat de rijen zijn gesorteerd, moet de parameter <code>countOrCondition</code> worden opgegeven om de resultaten verder te filteren. Let op: het sorteeralgoritme biedt geen garantie voor vaste gesorteerde resultaten. De parameter <code>countOrCondition</code> kent meerdere weergaven: <ul> <li> Als een getal is opgegeven, wordt een lijst met maximaal <code>countOrCondition</code> items in oplopende volgorde geretourneerd. </li> <li> Als een voorwaarde is opgegeven, wordt een lijst met items geretourneerd die in eerste instantie aan de voorwaarde voldoen. Zodra een item niet aan de voorwaarde voldoet, worden geen verdere items meer behandeld. </li> </ul>


## Examples

### Example #1 
De rij met de grootste waarde in kolom [a] met de voorwaarde [a] &gt; 0 in de tabel zoeken. De rijen worden gesorteerd voordat het filter wordt toegepast.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
De rij met de grootste waarde in kolom [a] met de voorwaarde [b] &gt; 0 in de tabel. De rijen worden gesorteerd voordat het filter wordt toegepast.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
