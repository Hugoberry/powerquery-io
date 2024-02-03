---
title: Type.NonNullable
---

# Type.NonNullable


## Description

형식에서 null을 허용하지 않는 형식을 반환합니다.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

<code>type</code>에서 <code>null을 허용하지 않는</code> 형식을 반환합니다.


## Examples

### Example #1 
&lt;code&gt;nullable 형식 숫자&lt;/code&gt;의 null을 허용하지 않는 형식을 반환합니다.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
