---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

指定されたフィールドを新しい順序で並べ替えます。


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>record</code> 内のフィールドを、リスト <code>fieldOrder</code> で指定されたフィールドの順序で並べ替えたレコードを返します。フィールド値は維持され、<code>fieldOrder</code> に含まれていないフィールドは元の位置のままになります。


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




## Category
Record.Transformations
