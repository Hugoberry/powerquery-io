---
title: List.Positions
---

# List.Positions


## Description

입력에 대한 오프셋의 목록을 반환합니다.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

입력 목록 <code>list</code>에 대한 오프셋의 목록을 반환합니다.    List.Transform을 사용하여 목록을 변경할 경우 위치 목록을 사용하여 해당 위치에 대한 변환 액세스 권한을 부여할 수 있습니다.


## Examples

### Example #1 
\{1, 2, 3, 4, null, 5} 목록에 있는 값의 오프셋을 확인합니다.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
