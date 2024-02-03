---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

少なくとも 1 つのセルにエラーがあり、入力テーブルから削除された行を含むテーブルを返します。列リストを指定した場合、指定した列のセルのみ、エラーの有無が確認されます。


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

少なくとも 1 つのセルにエラーがあり、入力テーブルから削除された行を含むテーブルを返します。列リストを指定した場合、指定した列のセルのみ、エラーの有無が確認されます。


## Examples

### Example #1 
先頭行からエラー値を削除します。
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
