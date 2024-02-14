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

<code>record</code> 内の指定された <code>field</code> の値を返します。フィールドが見つからなかった場合は、例外がスローされます。


## Examples

### Example #1 
レコード内のフィールド &#34;CustomerID&#34; の値を調べます。
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
