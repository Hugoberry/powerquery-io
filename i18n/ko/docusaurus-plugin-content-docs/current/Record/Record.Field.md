---
title: Record.Field
---

# Record.Field


## Description

레코드에 있는 지정된 필드의 값을 반환합니다.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

<code>record</code>에 있는 지정된 <code>field</code>의 값을 반환합니다. 필드를 찾을 수 없는 경우에는 예외가 발생합니다.


## Examples

### Example #1 
레코드에 있는 필드 &#34;CustomerID&#34;의 값을 확인합니다.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
