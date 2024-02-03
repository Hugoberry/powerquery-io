---
title: Binary.Range
---

# Binary.Range


## Description

오프셋에서 시작하는 이진 값의 하위 집합을 반환합니다.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

오프셋 <code>binary</code>에서 시작하는 이진 값의 하위 집합을 반환합니다. 선택적 매개 변수 <code>offset</code>은(는) 하위 집합의 최대 길이를 설정합니다.


## Examples

### Example #1 
오프셋 6에서 시작하는 이진 값의 하위 집합을 반환합니다.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
이진 값의 오프셋 6에서 길이 2의 하위 집합을 반환합니다.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
