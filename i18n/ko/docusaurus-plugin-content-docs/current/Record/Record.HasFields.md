---
title: Record.HasFields
---

# Record.HasFields


## Description

레코드에 지정된 필드가 있는지 여부를 나타냅니다.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

논리값(true 또는 false)을 반환하여 <code>record</code> 레코드의 <code>fields</code>에 필드가 지정되어 있는지 여부를 나타냅니다.    목록을 사용하여 여러 필드 값을 지정할 수 있습니다.


## Examples

### Example #1 
레코드에 필드 &#34;CustomerID&#34;가 있는지 여부를 확인합니다.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
레코드에 필드 &#34;CustomerID&#34; 및 &#34;Address&#34;가 있는지 여부를 확인합니다.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
