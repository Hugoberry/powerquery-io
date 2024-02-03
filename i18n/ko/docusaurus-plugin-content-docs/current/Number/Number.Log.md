---
title: Number.Log
---

# Number.Log


## Description

지정된 밑(기본값 e)에 대한 숫자의 로그를 반환합니다.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

지정된 <code>base</code>을(를) 밑으로 하는 숫자 <code>number</code>의 로그를 반환합니다. <code>base</code>을(를) 지정하지 않은 경우 기본값은 Number.E입니다.    <code>number</code>이(가) Null인 경우 <code>Number.Log</code>는 Null을 반환합니다.


## Examples

### Example #1 
2의 상용 로그를 가져옵니다.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
밑이 e인 2의 로그를 가져옵니다.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
