---
title: Text.Middle
---

# Text.Middle


하위 문자열을 특정 길이까지 반환합니다.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

오프셋 `start`에서 `count`자를 반환하거나 `text`의 끝까지 반환합니다.


## Examples

### Example #1
인덱스 6부터 시작하여 5자까지 "Hello World" 텍스트의 부분 문자열을 찾습니다.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
인덱스 6부터 시작하여 끝까지 "Hello World" 텍스트의 부분 문자열을 찾습니다.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
인덱스 0에서 시작하여 2자로 구성된 텍스트 "Hello World"에서 부분 문자열을 찾습니다.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
