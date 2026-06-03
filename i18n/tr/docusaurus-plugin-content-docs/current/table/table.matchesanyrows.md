---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Tablodaki herhangi bir satırın verilen koşulu sağlayıp sağlamadığını belirtir.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

`table` içindeki herhangi bir satırın verilen `condition` öğesini sağlayıp sağlamadığını belirtir. Herhangi bir satır eşleşiyorsa `true`, aksi halde `false` döndürür.


## Examples

### Example #1
\[a\] sütunundaki herhangi bir satır değerinin `({[a = 2, b = 4], [a = 6, b = 8]})` tablosunda çift olup olmadığını belirler.
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
`({[a = 1, b = 2], [a = 3, b = 4]})` tablosunda herhangi bir satır değerinin \[a = 1, b = 2\] olup olmadığını belirler.
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
