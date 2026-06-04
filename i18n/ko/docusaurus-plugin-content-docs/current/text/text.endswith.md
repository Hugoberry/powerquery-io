---
title: Text.EndsWith
---

# Text.EndsWith


텍스트가 지정한 값으로 끝나는지 여부를 나타냅니다.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

지정된 텍스트(`text`)가 지정된 값(`substring`)으로 끝나는지 여부를 나타냅니다. 표시는 대/소문자를 구분합니다.

`comparer`은(는) 비교를 제어하는 데 사용되는 `Comparer`입니다. 비교자를 사용하여 대/소문자 비구분 비교 또는 문화권 및 로캘 인식 비교를 제공할 수 있습니다.

수식 언어에서는 다음과 같은 기본 제공 비교자를 사용할 수 있습니다.

-   `Comparer.Ordinal`: 정확한 서수 비교를 수행하는 데 사용됨
-   `Comparer.OrdinalIgnoreCase`: 정확한 대/소문자 비구분 서수 비교를 수행하는 데 사용됨
-   `Comparer.FromCulture`: 문화권 인식 비교를 수행하는 데 사용됨


## Examples

### Example #1
"Hello, World"가 "world"로 끝나는지 확인합니다.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
"Hello, World"가 "World"로 끝나는지 확인합니다.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
