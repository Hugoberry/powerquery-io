---
title: Text.Proper
---

# Text.Proper


## Description

각 단어의 첫 글자를 대문자로 표시합니다.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

텍스트 값 <code>text</code>에서 각 단어의 첫 글자만 대문자로 표시한 결과를 반환합니다. 다른 모든 글자는 소문자로 반환됩니다. 선택적 <code>culture</code>(예: "en-US")이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
간단한 문장에 &lt;code&gt;Text.Proper&lt;/code&gt;를 사용합니다.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
