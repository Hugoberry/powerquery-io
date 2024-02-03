---
title: Type.IsNullable
---

# Type.IsNullable


## Description

형식이 nullable 형식이면 true를 반환하고, 그렇지 않으면 false를 반환합니다.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

형식이 <code>nullable</code> 형식이면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.


## Examples

### Example #1 
&lt;code&gt;숫자&lt;/code&gt;가 nullable 형식인지 확인합니다.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
&lt;code&gt;nullable 형식 숫자&lt;/code&gt;가 nullable 형식인지 확인합니다.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
