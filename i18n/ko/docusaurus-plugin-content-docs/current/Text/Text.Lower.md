---
title: Text.Lower
---

# Text.Lower


## Description

모든 문자를 소문자로 변환합니다.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

<code>text</code>의 모든 문자를 소문자로 변환한 결과를 반환합니다. 선택적 <code>culture</code>(예: "en-US")이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
&#34;AbCd&#34;의 소문자 버전을 가져옵니다.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations