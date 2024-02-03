---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

나열된 문자의 텍스트 값에서 첫 번째 위치를 반환합니다(찾을 수 없는 경우 -1 반환).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

<code>text</code>에서 찾은 목록 <code>characters</code>에서 문자의 첫 번째 위치를 반환합니다.
    선택적 매개 변수 <code>occurrence</code>을(를) 사용하여 반환할 발생 위치를 지정할 수 있습니다.


## Examples

### Example #1 
&#34;Hello, World!&#34;라는 텍스트에서 &#34;W&#34; 또는 &#34;H&#34;가 처음 등장하는 위치를 찾습니다.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
&#34;Hello, World!&#34;라는 텍스트에서 &#34;W&#34; 또는 &#34;H&#34;의 위치를 모두 찾습니다.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
