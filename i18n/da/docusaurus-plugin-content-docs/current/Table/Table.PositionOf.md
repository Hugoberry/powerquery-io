---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Returnerer den eller de angivne positioner for rækken i tabellen.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Returnerer rækkepositionen af den første forekomst af <code>row</code> i den angivne <code>table</code>. Returnerer -1, hvis der ikke blev fundet nogen forekomster.    <ul>       <li><code>table</code>: Inputtabellen.</li>       <li><code>row</code>: Den række i tabellen, der skal findes en position for.</li>       <li><code>occurrence</code>: <i>[Valgfrit]</i> Angiver, hvilke forekomster af rækken der skal returneres.</li>       <li><code>equationCriteria</code>: <i>[Valgfrit]</i> Styrer sammenligningen mellem tabelrækkerne.</li>    </ul>    


## Examples

### Example #1 
Find positionen af den første forekomst af [a = 2, b = 4] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Find positionen af den anden forekomst af [a = 2, b = 4] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Find positionen af alle forekomster af [a = 2, b = 4] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
