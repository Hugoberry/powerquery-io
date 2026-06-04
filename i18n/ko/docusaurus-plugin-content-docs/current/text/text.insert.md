---
title: Text.Insert
---

# Text.Insert


다른 텍스트 값의 지정된 위치에 텍스트 값을 삽입합니다.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

텍스트 값 `text`의 위치 `offset`에 텍스트 값 `newText`을(를) 삽입한 결과를 반환합니다. 시작 위치는 숫자 0입니다.


## Examples

### Example #1
"ABD"의 "B"와 "D" 사이에 "C"를 삽입합니다.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
