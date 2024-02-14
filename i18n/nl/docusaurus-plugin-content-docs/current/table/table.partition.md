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

Partitioneert de <code>table</code> in een lijst met <code>groups</code> tabellen op basis van de waarde van de <code>column</code> en een functie <code>hash</code>.    De functie <code>hash</code> wordt toegepast op de waarde van de rij <code>column</code> om een hash-waarde voor de rij te verkrijgen. De hash-waardemodulus <code>groups</code> bepaalt in welke van de geretourneerde tabellen de rij wordt geplaatst.    <ul>       <li><code>table</code>: de tabel die wordt gepartitioneerd.</li>       <li><code>column</code>: de kolom waarop de hash-bewerking wordt uitgevoerd, om te bepalen in welke geretourneerde tabel de rij wordt geplaatst.</li>       <li><code>groups</code>: het aantal tabellen waarin de invoertabel wordt gepartitioneerd.</li>       <li><code>hash</code>: de functie die wordt toegepast om een hash-waarde te verkrijgen.</li>    </ul>  


## Examples

### Example #1 
Partitioneert de tabel &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; in twee tabellen op kolom [a] met behulp van de waarden van de kolommen als de hash-functie.
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
