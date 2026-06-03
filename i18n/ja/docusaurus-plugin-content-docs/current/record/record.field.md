---
title: Record.Field
---

# Record.Field


レコード内の指定されたフィールドの値を返します。


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

`field` 内の指定された `record` の値を返します。フィールドが見つからない場合は、エラーが発生します。


## Examples

### Example #1
レコード内のフィールド "CustomerID" の値を調べます。
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
