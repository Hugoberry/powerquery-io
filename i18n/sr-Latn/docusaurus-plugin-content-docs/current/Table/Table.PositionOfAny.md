---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Vraća položaj ili položaje bilo kog navedenog reda u okviru tabele.


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

Vraća položaje redova iz <code>table</code> za prvo pojavljivanje liste sa <code>rows</code>. Vraća -1 ako se ne pronađe pojavljivanje.    <ul>    <li><code>table</code>: Ulazna tabela.</li>       <li><code>rows</code>:  Lista redova iz tabele čiji položaj treba pronaći.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Navodi koja pojavljivanja reda treba vratiti.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Kontroliše poređenje redova iz tabele.</li>    </ul>    


## Examples

### Example #1 
Pronalaženje položaja prvog pojavljivanja za [a = 2, b = 4] ili [a = 6, b = 8] u tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Pronalaženje položaja svih pojavljivanja za [a = 2, b = 4] ili [a = 6, b = 8] u tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
