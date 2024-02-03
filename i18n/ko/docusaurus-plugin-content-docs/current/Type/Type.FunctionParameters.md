---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

필드 값이 함수 형식의 매개 변수 이름으로 설정되어 있고 값이 해당하는 형식으로 설정되어 있는 레코드를 반환합니다.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

필드 값이 <code>type</code>의 매개 변수 이름으로 설정되어 있고 값이 해당하는 형식으로 설정되어 있는 레코드를 반환합니다.


## Examples

### Example #1 
&lt;code&gt;(x as number, y as text)&lt;/code&gt; 함수에 대한 매개 변수 형식을 확인합니다.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
