---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


テーブル内の指定された列の値のあいまいグループ化によって得られた代表値が入った新しい列を追加します。


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

<code>columnName</code> の代表値を持つ <code>table</code> に新しい列 <code>newColumnName</code> を追加します。代表値は、各行に対して <code>columnName</code> の値のあいまい一致を実行することによって取得されます。    <code>options</code> の省略可能な設定を含めると、キー列の比較方法を指定できます。オプションには次が含まれます。    <ul><li><code>Culture</code> : カルチャ固有のルールに基づくレコードのグループ化を許可します。任意の有効なカルチャ名を指定できます。たとえば、&quot;ja-JP&quot; のカルチャ オプションは、日本語カルチャに基づいてレコードをグループ化します。既定値は &quot;&quot; で、英語のインバリアント カルチャに基づいてグループ化します。</li><li><code>IgnoreCase</code> : 大文字と小文字を区別しないキーのグループ化を許可する論理値 (true/false) です。true の場合、たとえば &quot;Grapes&quot; は &quot;grapes&quot; と共にグループ化されます。既定値は true です。</li><li><code>IgnoreSpace</code> : グループを検索するために、テキストの一部の結合を許可する論理値 (true/false) です。true の場合、たとえば &quot;Gra pes&quot; は &quot;Grapes&quot; と共にグループ化されます。既定値は true です。</li><li><code>SimilarityColumnName</code> : 入力値とその入力の代表的な値の間の類似性を示す列の名前です。既定値は null で、類似性の新しい列は追加されません。</li><li><code>Threshold</code> : 2 つの値がグループ化される類似度スコアを指定する、0.00 - 1.00 の数値です。    たとえば、このオプションが 0.90 未満に設定されている場合、&quot;Grapes&quot; と &quot;Graes&quot; (&quot;p&quot; がない) は共にグループ化されます。    しきい値 1.00 は、完全一致の場合のみ許可されます。    (あいまいな「完全一致」は、大文字/小文字の指定、文字の順序、句読点などの違いを無視する場合があることに注意してください。)    既定値は 0.80 です。</li><li><code>TransformationTable</code> : カスタム値のマッピングに基づくレコードのグループ化を許可するテーブルです。&quot;From&quot; 列と &quot;To&quot; 列が含まれている必要があります。たとえば、&quot;From&quot; 列に &quot;Grapes&quot;、&quot;To&quot; 列に &quot;Raisins&quot; が含まれる変換テーブルが指定されている場合、&quot;Grapes&quot; は &quot;Raisins&quot; と共にグループ化されます。変換は、変換テーブルに含まれるテキストの出現すべてに対して適用されることにご注意ください。上述の変換テーブルの場合、&quot;Grapes are sweet&quot; も &quot;Raisins are sweet&quot; と共にグループ化されます。</li></ul><br />    


## Examples

### Example #1 
従業員の場所の代表値を検索します。
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
