---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Returnerer den eller de angivne positioner for alle de angivne rækker i tabellen.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Returnerer rækkens eller rækkernes position fra <code>table</code> af den første forekomst af listen i <code>rows</code>. Returnerer -1, hvis der ikke blev fundet nogen forekomster.    <ul>    <li><code>table</code>: Inputtabellen.</li>       <li><code>rows</code>: Den liste over rækker i tabellen, der skal findes positioner for.</li>       <li><code>occurrence</code>: <i>[Valgfrit]</i> Angiver, hvilke forekomster af rækken der skal returneres.</li>       <li><code>equationCriteria</code>: <i>[Valgfrit]</i> Styrer sammenligningen mellem tabelrækkerne.</li>    </ul>    


## Examples

### Example #1 
Find positionen af den første forekomst af [a = 2, b = 4] eller [a = 6, b = 8] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Find positionen af alle forekomster af [a = 2, b = 4] eller [a = 6, b = 8] i tabellen &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
