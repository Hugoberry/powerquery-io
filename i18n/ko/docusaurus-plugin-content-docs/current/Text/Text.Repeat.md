---
title: Text.Repeat
---

# Text.Repeat


## Description

입력 텍스트를 지정된 횟수만큼 반복하여 만든 텍스트 값을 반환합니다.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

입력 텍스트 <code>text</code>을(를) <code>count</code>번 반복하여 만든 텍스트 값을 반환합니다.


## Examples

### Example #1 
텍스트 &#34;a&#34;를 5번 반복합니다.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
텍스트 &#34;helloworld&#34;를 3번 반복합니다.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
