---
title: Table.NestedJoin
---

# Table.NestedJoin


对提供的列执行两个表之间的联接，并在新列中生成联接结果。


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

根据由 `key1` (针对 `table1`)和 `key2` (针对 `table2`)选择的键列值的等同性联接 `table1` 的行与 `table2` 的行。将结果输入名为 `newColumnName` 的列。

可选的 `joinKind` 指定要执行的联接类型。默认情况下，如果未指定 `joinKind`，则执行左外部联接。

可包含 `keyEqualityComparers` 的可选集来指定如何比较键列。此功能目前仅适用于内部使用。


## Examples

### Example #1
使用单个键列联接两个表。
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
