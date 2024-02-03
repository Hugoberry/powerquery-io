---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

레코드에 있는 지정된 필드의 값을 반환하거나, 필드를 찾을 수 없는 경우 기본값을 반환합니다.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

레코드 <code>record</code>에 있는 지정된 필드 <code>field</code>의 값을 반환합니다. 필드를 찾을 수 없는 경우에는 선택적 <code>defaultValue</code>이(가) 반환됩니다.


## Examples

### Example #1 
레코드에 있는 필드 &#34;Phone&#34;의 값을 확인하거나, 필드가 없는 경우 null을 반환합니다.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
레코드에 있는 필드 &#34;Phone&#34;의 값을 확인하거나, 필드가 없는 경우 기본값을 반환합니다.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
