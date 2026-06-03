---
title: Table.ContainsAny
---

# Table.ContainsAny


指定されたいずれかのレコードがテーブルに行として含まれているかどうかを示します。


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

レコードのリスト `rows` で指定されたいずれかのレコードが `table` に行として含まれているかどうかを示します。 省略可能なパラメーター `equationCriteria` を指定すると、テーブルの行と行の比較を制御できます。


## Examples

### Example #1
テーブル `({[a = 1, b = 2], [a = 3, b = 4]})` に行 `[a = 1, b = 2]` または `[a = 3, b = 5]` が含まれているかどうかを調べます。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
テーブル `({[a = 1, b = 2], [a = 3, b = 4]})` に行 `[a = 1, b = 3]` または `[a = 3, b = 5]` が含まれているかどうかを調べます。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
列 \[a\] のみを比較して、テーブル `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` に行 `[a = 1, b = 3]` または `[a = 3, b = 5]` が含まれているかどうかを調べます。
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
