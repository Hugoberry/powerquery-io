---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

함수 형식을 호출하는 데 필요한 최소 매개 변수 개수를 나타내는 숫자를 반환합니다.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

함수의 입력 <code>type</code>을(를) 호출하는 데 필요한 최소 매개 변수 개수를 나타내는 숫자를 반환합니다.


## Examples

### Example #1 
&lt;code&gt;(x as number, optional y as text)&lt;/code&gt; 함수에 대한 필수 매개 변수 개수를 확인합니다.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
