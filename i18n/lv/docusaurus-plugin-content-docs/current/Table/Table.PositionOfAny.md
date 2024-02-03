---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Tiek atgriezta tabulā esošas jebkuras norādītās rindas pozīcija vai pozīcijas.


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

Atgriež rindas(-u) pozīciju(-as) no <code>rows</code> saraksta pirmā gadījuma <code>table</code>. Ja nav atrasts neviens gadījums, tiek atgriezta vērtība -1.    <ul>    <li><code>table</code>: ievades tabula.</li>       <li><code>rows</code>: to tabulas rindu saraksts, kam jāatrod pozīcijas.</li>       <li><code>occurrence</code>: <i>[Neobligāti]</i> norāda, kuri rindas gadījumi jāatgriež.</li>       <li><code>equationCriteria</code>: <i>[Neobligāti]</i> kontrolē salīdzināšanu starp tabulas rindām.</li>    </ul>    


## Examples

### Example #1 
Atrodiet [a = 2, b = 4] vai [a = 6, b = 8] pirmā gadījuma pozīciju tabulā &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Atrodiet [a = 2, b = 4] vai [a = 6, b = 8] visu gadījumu pozīcijas tabulā &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
