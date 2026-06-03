---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


キーのあいまい一致に基づいて、テーブルの行をグループ化します。


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Remarks

各行に対して、指定された列 `key` の値のあいまい一致を実行することにより、`table` の行をグループ化します。 グループごとに、キー列 (およびその値) と、`aggregatedColumns` によって指定された集計列を含むレコードが構築されます。 この関数は、決まった順序の行を返すことを保証しません。

`options` の省略可能な設定を含めると、キー列の比較方法を指定できます。オプションには次が含まれます。

-   `Culture` : カルチャ固有のルールに基づくレコードのグループ化を許可します。任意の有効なカルチャ名を指定できます。たとえば、"ja-JP" のカルチャ オプションは、日本語カルチャに基づいてレコードをグループ化します。既定値は "" で、英語のインバリアント カルチャに基づいてグループ化します。
-   `IgnoreCase` : 大文字と小文字を区別しないキーのグループ化を許可する論理値 (true/false) です。true の場合、たとえば "Grapes" は "grapes" と共にグループ化されます。既定値は true です。
-   `IgnoreSpace` : グループを検索するために、テキストの一部の結合を許可する論理値 (true/false) です。true の場合、たとえば "Gra pes" は "Grapes" と共にグループ化されます。既定値は true です。
-   `SimilarityColumnName` : 入力値とその入力の代表的な値の間の類似性を示す列の名前です。既定値は null で、類似性の新しい列は追加されません。
-   `Threshold` : 2 つの値がグループ化される類似度スコアを指定する、0.00 - 1.00 の数値です。 たとえば、このオプションが 0.90 未満に設定されている場合、"Grapes" と "Graes" ("p" がない) は共にグループ化されます。 しきい値 1.00 は、完全一致の場合のみ許可されます。 (あいまいな「完全一致」は、大文字/小文字の指定、文字の順序、句読点などの違いを無視する場合があることに注意してください。) 既定値は 0.80 です。
-   `TransformationTable` : カスタム値のマッピングに基づくレコードのグループ化を許可するテーブルです。"From" 列と "To" 列が含まれている必要があります。たとえば、"From" 列に "Grapes"、"To" 列に "Raisins" が含まれる変換テーブルが指定されている場合、"Grapes" は "Raisins" と共にグループ化されます。変換は、変換テーブルに含まれるテキストの出現すべてに対して適用されることにご注意ください。上述の変換テーブルの場合、"Grapes are sweet" も "Raisins are sweet" と共にグループ化されます。


## Examples

### Example #1
テーブルをグループ化し、各場所 (`each Table.RowCount(_)`) の従業員数を含む集計列 \[Count\] を追加します。
```powerquery
Table.FuzzyGroup(
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
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
