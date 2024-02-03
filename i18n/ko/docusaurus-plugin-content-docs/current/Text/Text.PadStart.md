---
title: Text.PadStart
---

# Text.PadStart


## Description

지정된 텍스트의 시작에 패딩하여 지정한 길이의 텍스트를 반환합니다.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

텍스트 값 <code>text</code>의 시작에 공백을 삽입하여 <code>count</code> 길이까지 패딩된 <code>text</code> 값을 반환합니다.    선택적 문자 <code>character</code>을(를) 사용하여 패딩에 사용할 문자를 지정할 수 있습니다. 기본 패딩 문자는 공백입니다.


## Examples

### Example #1 
10자 길이가 되도록 텍스트 값의 시작에 패딩합니다.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2 
10자 길이가 되도록 텍스트 값의 시작에 &#34;|&#34;로 패딩합니다.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations
