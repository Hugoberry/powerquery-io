---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Vraća položaj ili položaje reda u okviru tabele.


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

Vraća položaj reda prvog pojavljivanja za <code>row</code> u navedenom <code>table</code>. Vraća -1 ako se ne pronađe pojavljivanje.    <ul>       <li><code>table</code>: Ulazna tabela.</li>       <li><code>row</code>: Red iz tabele čiji položaj treba pronaći.</li>       <li><code>occurrence</code>: <i>[Optional]</i> Navodi koja pojavljivanja reda treba vratiti.</li>       <li><code>equationCriteria</code>: <i>[Optional]</i> Kontroliše poređenje redova iz tabele.</li>    </ul>    


## Examples

### Example #1 
Pronalaženje položaja prvog pojavljivanja za [a = 2, b = 4] u tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Pronalaženje položaja drugog pojavljivanja za [a = 2, b = 4] u tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Pronalaženje položaja svih pojavljivanja za [a = 2, b = 4] u tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
