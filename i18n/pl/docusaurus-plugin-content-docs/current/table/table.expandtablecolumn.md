---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Rozwija kolumnę rekordów lub kolumnę tabel na wiele kolumn w tabeli zawierającej.


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

Rozwija tabele w kolumnie `table`\[`column`\] na wiele wierszy i kolumn. Parametr `columnNames` służy do wybierania kolumn z tabeli wewnętrznej, które zostaną rozwinięte. Określając parametr `newColumnNames`, można uniknąć konfliktów między nazwami istniejących i nowych kolumn.


## Examples

### Example #1
Rozwiń kolumny tabel znajdujące się w kolumnie `[a]` tabeli `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` na 3 kolumny: `[t.a]`, `[t.b]` i `[t.c]`.
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
