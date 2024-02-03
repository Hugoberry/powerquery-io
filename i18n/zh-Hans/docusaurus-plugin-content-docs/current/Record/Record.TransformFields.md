---
title: Record.TransformFields
---

# Record.TransformFields


## Description

应用指定的转换后返回一个记录。


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

将列表 <code>transformOperations</code> 中指定的转换应用到 <code>record</code> 后返回一个记录。    一次可以转换一个或多个字段。      <div>在转换单个字段时，要求 <code>transformOperations</code> 是包含两项的列表。<code>transformOperations</code> 中的第一项指定字段名称，<code>transformOperations</code> 中的第二项指定要用于转换的函数。例如 <code>\{"Quantity", Number.FromText}</code></div>      <div>在转换多个字段时，要求 <code>transformOperations</code> 是列表的列表，其中每个里面的列表是一对字段名称和转换操作。例如 <code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code></div>


## Examples

### Example #1 
将 &#34;Price&#34; 字段转换为数字。
```powerquery
Record.TransformFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {"Price", Number.FromText}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```


### Example #2 
将 &#34;OrderID&#34; 和 &#34;Price&#34; 字段转换为数字。
```powerquery
Record.TransformFields(
    [OrderID = "1", CustomerID = 1, Item = "Fishing rod", Price = "100.0"],
    {{"OrderID", Number.FromText}, {"Price", Number.FromText}}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100]
```




## Category
Record.Transformations
