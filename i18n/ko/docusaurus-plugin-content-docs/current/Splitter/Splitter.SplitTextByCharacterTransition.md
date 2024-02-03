---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

문자 종류 간의 전환에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다. \{0} 및 \{1} 매개 변수는 문자 목록일 수도 있고, 문자를 받고 true/false를 반환하는 함수일 수도 있습니다.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

문자 종류 간의 전환에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다. <code>before</code> 및 <code>after</code> 매개 변수는 문자 목록일 수도 있고, 문자를 받고 true/false를 반환하는 함수일 수도 있습니다.


## Examples

### Example #1 
대문자 또는 소문자 뒤에 숫자가 올 때마다 입력을 분할합니다.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
