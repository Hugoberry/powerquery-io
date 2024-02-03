---
title: Binary.Buffer
---

# Binary.Buffer


## Description

이진 값을 메모리에 버퍼링합니다.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

이진 값을 메모리에 버퍼링합니다. 이 호출의 결과는 안정적 이진 값입니다. 즉, 바이트의 길이와 순서가 결정적입니다.


## Examples

### Example #1 
안정적 버전의 이진 값을 만듭니다.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
