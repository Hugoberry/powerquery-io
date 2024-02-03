---
title: Record.FromList
---

# Record.FromList


## Description

지정된 필드 값 목록 및 필드 집합을 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

지정된 필드 값의 <code>list</code> 및 필드 집합을 포함하는 레코드를 반환합니다. 텍스트 값의 목록이나 레코드 형식으로 <code>fields</code>을(를) 지정할 수 있습니다. 필드가 고유하지 않으면 오류가 발생합니다.


## Examples

### Example #1 
필드 값 목록 및 필드 이름 목록에서 레코드를 작성합니다.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
필드 값 목록 및 레코드 형식에서 레코드를 작성합니다.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
