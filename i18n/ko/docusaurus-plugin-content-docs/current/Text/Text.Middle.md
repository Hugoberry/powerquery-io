---
title: Text.Middle
---

# Text.Middle


## Description

하위 문자열을 특정 길이까지 반환합니다.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

오프셋 <code>start</code>에서 <code>count</code>자를 반환하거나 <code>text</code>의 끝까지 반환합니다.


## Examples

### Example #1 
인덱스 6부터 시작하여 5자까지 &#34;Hello World&#34; 텍스트의 부분 문자열을 찾습니다.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
인덱스 6부터 시작하여 끝까지 &#34;Hello World&#34; 텍스트의 부분 문자열을 찾습니다.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
