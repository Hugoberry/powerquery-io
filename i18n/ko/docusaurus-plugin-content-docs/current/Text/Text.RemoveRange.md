---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

지정된 오프셋부터 시작하여 정해진 개수의 문자를 제거합니다.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

<code>offset</code> 위치의 모든 문자가 제거된 텍스트 값 <code>text</code>의 복사본을 반환합니다.    선택적 매개 변수 <code>count</code>을(를) 사용하여 제거할 문자 수를 지정할 수 있습니다. <code>count</code>의 기본값은 1입니다. 위치 값은 0부터 시작합니다.


## Examples

### Example #1 
텍스트 값 &#34;ABEFC&#34;의 위치 2에서 문자 1개를 제거합니다.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
텍스트 값 &#34;ABEFC&#34;의 위치 2에서 시작하여 문자 2를 제거합니다.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
