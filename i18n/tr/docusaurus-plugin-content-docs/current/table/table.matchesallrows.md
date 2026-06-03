---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Tablodaki tüm satırların verilen koşulu sağlayıp sağlamadığını belirtir.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

`table` içindeki tüm satırların verilen `condition` öğesini sağlayıp sağlamadığını belirtir. Tüm satırlar eşleşiyorsa `true`, aksi halde `false` döndürür.


## Examples

### Example #1
\[a\] sütunundaki tüm satır değerlerinin tabloda eşit olup olmadığını belirler.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
`({[a = 1, b = 2], [a = 3, b = 4]})` tablosundaki tüm satır değerlerinin \[a = 1, b = 2\] olup olmadığını bulur.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
