---
title: Table.FromRecords
---

# Table.FromRecords


レコードのリストをテーブルに変換します。


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

指定されたレコードのリストをテーブルに変換します。

-   `records`: テーブルに変換するレコードのリスト。
-   `columns`: (省略可能) テーブルの列名のリスト、またはテーブルの種類。
-   `missingField`: (省略可能) 行内の不足しているフィールドをどのように処理するかを指定します。次のいずれかの値を使用します:
    -   `MissingField.Error`: 不足しているフィールドがある場合はエラーになります (既定値)。
    -   `MissingField.UseNull`: 不足しているフィールドをすべて `null` 値として含めます。
      
    このパラメーターに `MissingField.Ignore` を使用すると、エラーが発生します。


## Examples

### Example #1
レコード フィールド名を列名として使用して、レコードからテーブルを作成します。
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
型指定された列を使用してレコードからテーブルを作成し、数値の列を選択します。
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
指定されたレコードから、顧客の名・ミドルイニシャル・姓を含む表を作成してください。いずれかの値が欠損している場合は、その値を `null` に置き換えてください。
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
