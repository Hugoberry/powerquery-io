---
title: List.Split
---

# List.Split


## Description

지정한 페이지 크기를 사용하여 지정한 목록을 목록의 목록으로 분할합니다.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

출력 목록의 첫 번째 요소가 원본 목록의 처음 <code>pageSize</code>개 요소가 포함된 목록, 출력 목록의 그 다음 요소가 원본 목록의    다음 <code>pageSize</code>개 요소가 포함된 목록과 같은 목록의 목록으로 <code>list</code>을(를) 분할합니다.



## Category
List.Transformation functions
