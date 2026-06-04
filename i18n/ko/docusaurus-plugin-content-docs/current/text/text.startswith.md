---
title: Text.StartsWith
---

# Text.StartsWith


텍스트가 지정된 값으로 시작되는지 여부를 나타냅니다.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

텍스트 값 `text`이(가) 텍스트 값 `substring`(으)로 시작하는 경우 true를 반환합니다.

-   `text`: 검색할 `text` 값입니다.
-   `substring`: `text`에서 검색할 부분 문자열인 `text` 값입니다.
-   `comparer`: *(선택 사항)*비교를 제어하는 데 사용되는 `Comparer`입니다. 예를 들어 `Comparer.OrdinalIgnoreCase`를 사용하여 대/소문자를 구분하지 않는 검색을 수행할 수 있습니다.

`comparer`은(는) 비교를 제어하는 데 사용되는 `Comparer`입니다. 비교자는 대/소문자를 구분하지 않거나 문화 및 로캘을 인식하는 비교를 제공하는 데 사용할 수 있습니다.

다음 기본 제공 비교자를 수식 언어로 사용할 수 있습니다.

-   `Comparer.Ordinal`: 정확한 서수 비교를 수행하는 데 사용됩니다.
-   `Comparer.OrdinalIgnoreCase`: 대/소문자를 구분하지 않는 정확한 서수 비교를 수행하는 데 사용됩니다.
-   `Comparer.FromCulture`: 문화권 인식 비교를 수행하는 데 사용됩니다.


## Examples

### Example #1
텍스트 "Hello, World"가 텍스트 "hello"로 시작되는지 확인합니다.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
텍스트 "Hello, World"가 텍스트 "Hello"로 시작되는지 확인합니다.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
대/소문자를 무시하고 텍스트 "Hello, World"가 텍스트 "hello"로 시작하는지 확인합니다.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
