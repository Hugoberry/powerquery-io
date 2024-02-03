---
title: Record.Combine
---

# Record.Combine


## Description

指定されたリスト内のレコードを結合します。


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

指定された <code>records</code> 内のレコードを結合します。<code>records</code> にレコード以外の値が含まれている場合は、エラーが返されます。


## Examples

### Example #1 
レコードから結合したレコードを作成します。
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
