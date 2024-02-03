---
title: Type.FunctionReturn
---

# Type.FunctionReturn


## Description

함수 형식별로 반환되는 형식을 반환합니다.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Details

함수 <code>type</code>별로 반환되는 형식을 반환합니다.


## Examples

### Example #1 
&lt;code&gt;() as any)&lt;/code&gt;의 반환 형식을 확인합니다.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
