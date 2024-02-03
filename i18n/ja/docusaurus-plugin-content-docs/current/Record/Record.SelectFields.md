---
title: Record.SelectFields
---

# Record.SelectFields


## Description

指定されたフィールドのみを含むレコードを返します。


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

入力 <code>record</code> からリスト <code>fields</code> で指定されたフィールドのみを含むレコードを返します。


## Examples

### Example #1 
レコード内のフィールド &#34;Item&#34; と &#34;Price&#34; を選択します。
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
