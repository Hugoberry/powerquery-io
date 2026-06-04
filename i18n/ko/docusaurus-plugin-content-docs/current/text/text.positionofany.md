---
title: Text.PositionOfAny
---

# Text.PositionOfAny


나열된 문자의 텍스트 값에서 첫 번째 위치를 반환합니다(찾을 수 없는 경우 -1 반환).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

`text`에서 찾은 목록 `characters`에서 문자의 첫 번째 위치를 반환합니다. 선택적 매개 변수 `occurrence`을(를) 사용하여 반환할 발생 위치를 지정할 수 있습니다.


## Examples

### Example #1
"Hello, World!"라는 텍스트에서 "W" 또는 "H"가 처음 등장하는 위치를 찾습니다.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
"Hello, World!"라는 텍스트에서 "W" 또는 "H"의 위치를 모두 찾습니다.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
