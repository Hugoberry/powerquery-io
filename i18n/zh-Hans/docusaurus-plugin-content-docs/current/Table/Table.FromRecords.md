---
title: Table.FromRecords
---

# Table.FromRecords


将记录列表转换为表。


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

将指定的记录列表转换为表。

-   `records`: 要转换为表的记录列表。
-   `columns`: (可选)表的列名列表或表的类型列表。
-   `missingField`: (可选)指定如何处理行中缺失的字段。使用以下值之一:
    -   `MissingField.Error`: 任何缺失字段都会导致错误(默认)。
    -   `MissingField.UseNull`: 任何缺失字段都会以 `null` 值的形式包含在内。
      
    使用此参数中的 `MissingField.Ignore` 会导致错误。


## Examples

### Example #1
使用记录字段名称作为列名称，通过记录创建表。
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
使用键入的列通过记录创建表并选择数字列。
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
创建一个表，其中包含指定记录中客户的名字、中间首字母和姓氏。如果有任何值缺失，请将其替换为 `null`。
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
