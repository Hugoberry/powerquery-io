---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Vrátí pozici nebo pozice libovolných zadaných řádků tabulky.


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

Vrátí pozice řádků z tabulky <code>table</code> pro první výskyt seznamu <code>rows</code>. Pokud není nalezen žádný výskyt, vrátí hodnotu -1.    <ul>    <li><code>table</code>: Vstupní tabulka</li>       <li><code>rows</code>: Seznam řádků v tabulce, jejichž pozice se mají hledat.</li>       <li><code>occurrence</code>: <i>[Volitelné]</i> Určí, které výskyty řádku se mají vrátit.</li>       <li><code>equationCriteria</code>: <i>[Volitelné]</i> Řídí porovnávání mezi řádky tabulky.</li>    </ul>    


## Examples

### Example #1 
Umožňuje najít pozici prvního výskytu [a = 2, b = 4] nebo [a = 6, b = 8] v tabulce &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Umožňuje najít pozici všech výskytů [a = 2, b = 4] nebo [a = 6, b = 8] v tabulce &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
