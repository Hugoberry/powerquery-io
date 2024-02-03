---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Tiek atgriezta tabulā esošas rindas pozīcija vai pozīcijas.


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

Atgriež <code>row</code> pirmā gadījuma rindas pozīciju norādītajā <code>table</code>. Ja nav atrasts neviens gadījums, tiek atgriezta vērtība -1.    <ul>       <li><code>table</code>: ievades tabula.</li>       <li><code>row</code>: tabulas rinda, kurai jāatrod pozīcija.</li>       <li><code>occurrence</code>: <i>[Neobligāti]</i> norāda, kuri rindas gadījumi jāatgriež.</li>       <li><code>equationCriteria</code>: <i>[Neobligāti]</i> kontrolē salīdzināšanu starp tabulas rindām.</li>    </ul>    


## Examples

### Example #1 
Atrodiet [a = 2, b = 4] pirmā gadījuma pozīciju tabulā &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Atrodiet [a = 2, b = 4] otrā gadījuma pozīciju tabulā &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Atrodiet [a = 2, b = 4] visu gadījumu pozīcijas tabulā &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
