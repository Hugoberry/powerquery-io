---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

지정된 입력 내의 텍스트를 바꿉니다.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

원래 <code>text</code>의 <code>old</code> 텍스트를 <code>new</code> 텍스트로 바꿉니다. 이 치환 함수는 <code>List.ReplaceValue</code> 및 <code>Table.ReplaceValue</code>에 사용할 수 있습니다.


## Examples

### Example #1 
문자열 &#34;hEllo world&#34;에서 텍스트 &#34;hE&#34;를 &#34;He&#34;로 바꿉니다.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
