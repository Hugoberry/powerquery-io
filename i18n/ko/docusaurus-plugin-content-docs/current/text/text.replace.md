---
title: Text.Replace
---

# Text.Replace


텍스트에서 지정된 하위 문자열이 있으면 모두 바꿉니다.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

텍스트 값 `text`에서 모든 텍스트 값 `old`을(를) 텍스트 값 `new`(으)로 바꾼 결과를 반환합니다. 이 함수는 대/소문자를 구분합니다.


## Examples

### Example #1
문장에서 모든 "the"를 "a"로 바꿉니다.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
