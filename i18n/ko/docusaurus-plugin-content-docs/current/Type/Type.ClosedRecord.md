---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

지정한 레코드 형식의 닫힌 버전을 반환합니다(이미 닫혀 있는 경우에는 동일한 형식).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

지정한 <code>레코드</code> <code>type</code>의 닫힌 버전을 반환합니다(이미 닫혀 있는 경우에는 동일한 형식).


## Examples

### Example #1 
&lt;code&gt;type [ A = number,…]&lt;/code&gt;의 닫힌 버전을 만듭니다.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
