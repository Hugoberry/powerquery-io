---
title: Text.Range
---

# Text.Range


오프셋에 있는 부분 문자열을 반환합니다.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

오프셋 `text`에서 찾은 `offset` 텍스트의 부분 문자열을 반환합니다. 선택적 매개 변수 `count`을(를) 포함하여 반환할 문자 수를 지정할 수 있습니다. 문자가 충분하지 않으면 오류가 발생합니다.


## Examples

### Example #1
인덱스 6부터 시작하여 "Hello World" 텍스트의 부분 문자열을 찾습니다.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
인덱스 6부터 시작하여 5자를 포함하는 "Hello World Hello" 텍스트의 부분 문자열을 찾습니다.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
