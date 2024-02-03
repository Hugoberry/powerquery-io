---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

레코드 형식이 열려 있는지 여부를 반환합니다.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

레코드 <code>type</code>이(가) 열려 있는지 여부를 나타내는 <code>논리값</code>을 반환합니다.


## Examples

### Example #1 
&lt;code&gt;type [ A = number, ...]&lt;/code&gt; 레코드가 열려 있는지 확인합니다.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
