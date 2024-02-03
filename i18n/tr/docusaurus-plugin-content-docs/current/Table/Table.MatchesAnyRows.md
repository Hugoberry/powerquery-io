---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Tablodaki herhangi bir satırın verilen koşulu sağlayıp sağlamadığını belirtir.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

<code>table</code> içindeki herhangi bir satırın verilen <code>condition</code> öğesini sağlayıp sağlamadığını belirtir. Herhangi bir satır eşleşiyorsa <code>true</code>, aksi halde <code>false</code> döndürür.


## Examples

### Example #1 
[a] sütunundaki herhangi bir satır değerinin &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt; tablosunda çift olup olmadığını belirler.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tablosunda herhangi bir satır değerinin [a = 1, b = 2] olup olmadığını belirler.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
