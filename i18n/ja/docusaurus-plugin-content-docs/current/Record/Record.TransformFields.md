---
title: Record.TransformFields
---

# Record.TransformFields


## Description

指定された変換を適用したレコードを返します。


## Syntax

```powerquery
Record.TransformFields(
    record as record,
    transformOperations as list,
    optional missingField as MissingField.Type
) as record
```


## Details

リスト <code>transformOperations</code> で指定された変換を <code>record</code> に適用したレコードを返します。    一度に 1 つまたは複数のフィールドを変換できます。      <div>1 つのフィールドを変換する場合、<code>transformOperations</code> は 2 つの項目を含むリストである必要があります。<code>transformOperations</code> の最初の項目にはフィールド名を指定し、<code>transformOperations</code> の 2 番目の項目には変換に使用する関数を指定します。たとえば、<code>\{"Quantity", Number.FromText}</code> のように指定します</div>      <div>複数のフィールドを変換する場合、<code>transformOperations</code> はリストのリストである必要があります。入れ子のリストはそれぞれフィールド名と変換操作のペアで構成します。たとえば、<code>\{\{"Quantity",Number.FromText},\{"UnitPrice", Number.FromText}}</code> のように指定します</div>


## Examples

### Example #1 
&#34;Price&#34; フィールドを数値に変換します。
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
&#34;OrderID&#34; フィールドと &#34;Price&#34; フィールドを数値に変換します。
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
