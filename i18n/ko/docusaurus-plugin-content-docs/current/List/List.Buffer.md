---
title: List.Buffer
---

# List.Buffer


## Description

목록을 버퍼링합니다.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

<code>list</code> 목록을 메모리에 버퍼링합니다. 이 호출의 결과는 안정적 목록입니다.


## Examples

### Example #1 
\{1..10} 목록의 안정적 복사본을 만듭니다.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
