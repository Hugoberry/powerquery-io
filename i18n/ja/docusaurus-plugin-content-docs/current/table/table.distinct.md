---
title: Table.Distinct
---

# Table.Distinct


重複する行をテーブルから削除します。


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

テーブルから重複する行を削除します。 省略可能なパラメーター `equationCriteria` は、重複をテストするテーブルの列を指定します。`equationCriteria` が指定されていない場合は、すべての列がテストされます。  
  
Power Query では、特定の操作がバックエンド データ ソースにオフロードされる ("折りたたみ" と呼ばれる) ことがあり、また厳密に必要でない操作をスキップして クエリを最適化することがあるため、一般に、どの特定の重複が保持されるかは保証されません。 たとえば、列値の一意のセットを持つ最初の行が必ず残り、テーブル内のさらに下の行が削除されるとは想定できません。 動作が予測できる形で重複の削除を実行したい場合は、最初に `Table.Buffer` を使用してテーブルをバッファー処理します。


## Examples

### Example #1
重複する行をテーブルから削除します。
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
列 \[b\] が重複する行をテーブル `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})` から削除します。
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
