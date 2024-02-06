---
title: Record.HasFields
---

# Record.HasFields


指定されたフィールドがレコードに存在するかどうかを示します。


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

<code>fields</code> で指定されたフィールドがレコード <code>record</code> に存在するかどうかを示す論理値 (true または false) を返します。    リストを使用すると、複数のフィールド値を指定できます。


## Examples

### Example #1 
レコードにフィールド &#34;CustomerID&#34; が存在するかどうかを調べます。
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
レコードにフィールド &#34;CustomerID&#34; と &#34;Address&#34; が存在するかどうかを調べます。
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
