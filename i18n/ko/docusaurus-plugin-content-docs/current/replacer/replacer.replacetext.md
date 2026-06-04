---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


지정된 입력 내의 텍스트를 바꿉니다.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

원래 `text`의 `old` 텍스트를 `new` 텍스트로 바꿉니다. 이 치환 함수는 `List.ReplaceValue` 및 `Table.ReplaceValue`에 사용할 수 있습니다.


## Examples

### Example #1
문자열 "hEllo world"에서 텍스트 "hE"를 "He"로 바꿉니다.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
