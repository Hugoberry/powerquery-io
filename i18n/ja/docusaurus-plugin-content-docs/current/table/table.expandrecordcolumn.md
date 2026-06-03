---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


レコード列を値ごとに列に展開します。


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

入力 `table` 内にレコードの `column` がある場合に、レコード内の各フィールドを列にしたテーブルを作成します。必要に応じて、`newColumnNames` を指定して、新しいテーブルの列名を一意にすることができます。

-   `table`: 展開するレコード列を含む元のテーブル。
-   `column`: 展開する列。
-   `fieldNames`: テーブルの列に展開するフィールドのリスト。
-   `newColumnNames`: 新しい列に付ける列名のリスト。新しいテーブルの列に重複する新しい列名を付けることはできません。


## Examples

### Example #1
テーブル `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` の列 \[a\] を "aa"、"bb"、"cc" の 3 つの列に展開します。
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
