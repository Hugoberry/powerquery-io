---
title: Table.Partition
---

# Table.Partition


Maakt van de tabel partities in een lijst tabellen op basis van het aantal opgegeven groepen en de opgegeven kolom.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Partitioneert de `table` in een lijst met `groups` tabellen op basis van de waarde van de `column` en een functie `hash`. De functie `hash` wordt toegepast op de waarde van de rij `column` om een hash-waarde voor de rij te verkrijgen. De hash-waardemodulus `groups` bepaalt in welke van de geretourneerde tabellen de rij wordt geplaatst.

-   `table`: de tabel die wordt gepartitioneerd.
-   `column`: de kolom waarop de hash-bewerking wordt uitgevoerd, om te bepalen in welke geretourneerde tabel de rij wordt geplaatst.
-   `groups`: het aantal tabellen waarin de invoertabel wordt gepartitioneerd.
-   `hash`: de functie die wordt toegepast om een hash-waarde te verkrijgen.


## Examples

### Example #1
Partitioneert de tabel `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` in twee tabellen op kolom \[a\] met behulp van de waarden van de kolommen als de hash-functie.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
