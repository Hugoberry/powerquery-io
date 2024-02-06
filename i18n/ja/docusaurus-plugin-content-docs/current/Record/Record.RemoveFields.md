---
title: Record.RemoveFields
---

# Record.RemoveFields


指定されたフィールドを入力レコードから削除します。


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

入力 <code>record</code> からリスト <code>fields</code> で指定されたすべてのフィールドを削除したレコードを返します。指定されたフィールド名が存在しなかった場合は、例外がスローされます。


## Examples

### Example #1 
レコードからフィールド &#34;Price&#34; を削除します。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
レコードからフィールド &#34;Price&#34; と &#34;Item&#34; を削除します。
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
