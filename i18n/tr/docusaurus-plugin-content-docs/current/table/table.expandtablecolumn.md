---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Bir kayıt sütununu veya tablo sütununu, içeren tabloda birden fazla sütuna genişletir.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

`table`\[`column`\] içindeki tabloları birden çok satır ve sütuna genişletir. `columnNames`, iç tablodan genişletilecek sütunları seçmek için kullanılır. Var olan sütunlar ve yeni sütunlar arasındaki çakışmalardan kaçınmak için `newColumnNames` öğesini belirtir.


## Examples

### Example #1
`({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` tablosunda `[a]` içindeki tablo sütunlarını `[t.a]`, `[t.b]` ve `[t.c]` sütunlarına genişletir.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
