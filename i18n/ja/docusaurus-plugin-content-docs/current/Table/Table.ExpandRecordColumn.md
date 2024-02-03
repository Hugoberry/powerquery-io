---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

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


## Details

入力 <code>table</code> 内にレコードの <code>column</code> がある場合に、レコード内の各フィールドを列にしたテーブルを作成します。必要に応じて、<code>newColumnNames</code> を指定して、新しいテーブルの列名を一意にすることができます。    <ul>        <li><code>table</code>: 展開するレコード列を含む元のテーブル。</li>        <li><code>column</code>: 展開する列。</li>        <li><code>fieldNames</code>: テーブルの列に展開するフィールドのリスト。</li>        <li><code>newColumnNames</code>: 新しい列に付ける列名のリスト。新しいテーブルの列に重複する新しい列名を付けることはできません。</li>    </ul>


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; の列 [a] を &#34;aa&#34;、&#34;bb&#34;、&#34;cc&#34; の 3 つの列に展開します。
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
