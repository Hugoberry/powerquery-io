---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Vrátí pozici nebo pozice řádku tabulky.


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

Vrátí pozici prvního výskytu řádku <code>row</code> v tabulce <code>table</code>. Pokud není nalezen žádný výskyt, vrátí hodnotu -1.    <ul>       <li><code>table</code>: Vstupní tabulka</li>       <li><code>row</code>: Řádek v tabulce, jehož pozice se mají hledat.</li>       <li><code>occurrence</code>: <i>[Volitelné]</i> Určí, které výskyty řádku se mají vrátit.</li>       <li><code>equationCriteria</code>: <i>[Volitelné]</i> Řídí porovnávání mezi řádky tabulky.</li>    </ul>    


## Examples

### Example #1 
Umožňuje najít pozici prvního výskytu [a = 2, b = 4] v tabulce &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Umožňuje najít pozici druhého výskytu [a = 2, b = 4] v tabulce &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Umožňuje najít pozici všech výskytů [a = 2, b = 4] v tabulce &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
