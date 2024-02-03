---
title: List.Accumulate
---

# List.Accumulate


## Description

목록의 항목에서 요약 값을 누적합니다.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

<code>accumulator</code>을(를) 사용하여 <code>list</code> 목록의 항목에서 요약 값을 누적합니다.    선택적 시드 매개 변수 <code>seed</code>을(를) 설정할 수 있습니다.


## Examples

### Example #1 
((state, current) =&gt; state + current를 사용하여 \{1, 2, 3, 4, 5} 목록의 항목에서 요약 값을 누적합니다.
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
