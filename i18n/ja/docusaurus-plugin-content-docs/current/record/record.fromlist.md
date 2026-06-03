---
title: Record.FromList
---

# Record.FromList


フィールド値のリストとフィールドのセットが指定されたときに、レコードを返します。


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

フィールド値の `list` とフィールドのセットが指定されたときに、レコードを返します。 `fields` はテキスト値のリストか、レコードの型で指定できます。 フィールドが一意でない場合、エラーが発生します。


## Examples

### Example #1
フィールド値のリストとフィールド名のリストからレコードを作成します。
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
フィールド値のリストとレコードの型からレコードを作成します。
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
