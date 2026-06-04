---
title: Text.PositionOf
---

# Text.PositionOf


값의 첫 번째 위치를 반환합니다(찾을 수 없는 경우 -1 반환).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

`text`에 있는 `substring` 텍스트 값의 지정된 발생 위치를 반환합니다. 선택적 매개 변수 `occurrence`을(를) 사용하여 반환할 발생 위치를 지정할 수 있습니다(기본값은 첫 발생 위치). `substring`을(를) 찾을 수 없는 경우 -1을 반환합니다.

`comparer`은(는) 비교를 제어하는 데 사용되는 `Comparer`입니다. 비교자를 사용하여 대/소문자 비구분 비교 또는 문화권 및 로캘 인식 비교를 제공할 수 있습니다.

수식 언어에서는 다음과 같은 기본 제공 비교자를 사용할 수 있습니다.

-   `Comparer.Ordinal`: 정확한 서수 비교를 수행하는 데 사용됨
-   `Comparer.OrdinalIgnoreCase`: 정확한 대/소문자 비구분 서수 비교를 수행하는 데 사용됨
-   `Comparer.FromCulture`: 문화권 인식 비교를 수행하는 데 사용됨


## Examples

### Example #1
"Hello, World! Hello, World!" 텍스트에서 "World"의 첫 번째 발생 위치를 가져옵니다.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
"Hello, World! Hello, World!"에서 "World"의 마지막 발생 위치를 가져옵니다.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
