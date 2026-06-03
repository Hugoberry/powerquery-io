---
title: Record.ReorderFields
---

# Record.ReorderFields


レコード フィールドの順序を、フィールド名のリストの順序に合わせて並べ替えます。


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

レコードのフィールドの順序を、フィールド名のリストの順序に合わせて並べ替えます。

-   `record`: 並べ替えるフィールドを含むレコード。
-   `fieldOrder`: レコードに適用するフィールドの新しい順序を含むリスト。フィールド値は維持され、このパラメーターにリストされていないフィールドは元の位置に残ります。
-   `missingField`: フィールド数が予想よりも少ない行の欠損値に対して予期されるアクションを指定します。次の値が有効です:
    -   `MissingField.Error`: (既定値) フィールドが見つからないとエラーが発生することを示します。`missingField` パラメーターに値が入力されていない場合は、この値が使用されます。
    -   `MissingField.Ignore`: 不足しているフィールドを無視する必要があることを示します。
    -   `MissingField.UseNull`: 不足しているフィールドを `null` 値として含める必要があることを示します。


## Examples

### Example #1
レコード内の一部のフィールドを並べ替えます。
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
レコード内のフィールドの一部を並べ替え、欠落しているフィールドに `null` を含めます。
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
