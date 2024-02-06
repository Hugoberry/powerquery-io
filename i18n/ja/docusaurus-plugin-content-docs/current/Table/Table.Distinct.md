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

テーブルから重複する行を削除します。    省略可能なパラメーター <code>equationCriteria</code> は、重複をテストするテーブルの列を指定します。<code>equationCriteria</code> が指定されていない場合は、すべての列がテストされます。<br />    <br />    Power Query では、特定の操作がバックエンド データ ソースにオフロードされること ("折りたたみ" と呼ばれる) や、厳密な必要性がない操作をスキップして     クエリを最適化することがあるため、一般に、どの特定の重複が保持されるかは保証されません。    たとえば、ある一意の列値のセットを含んだ最初の行が必ず残り、テーブル内の下方にある行が削除されると仮定することはできません。    動作が予測できる形で重複の削除を実行したい場合は、最初に <code>Table.Buffer</code> を使用してテーブルをバッファー処理します。


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
列 [b] が重複する行をテーブル &lt;code&gt;(\{[a = &#34;A&#34;, b = &#34;a&#34;], [a = &#34;B&#34;, b = &#34;a&#34;], [a = &#34;A&#34;, b = &#34;b&#34;]})&lt;/code&gt; から削除します。
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
