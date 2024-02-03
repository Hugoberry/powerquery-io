---
title: Text.Insert
---

# Text.Insert


## Description

다른 텍스트 값의 지정된 위치에 텍스트 값을 삽입합니다.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

텍스트 값 <code>text</code>의 위치 <code>offset</code>에 텍스트 값 <code>newText</code>을(를) 삽입한 결과를 반환합니다. 시작 위치는 숫자 0입니다.


## Examples

### Example #1 
&#34;ABD&#34;의 &#34;B&#34;와 &#34;D&#34; 사이에 &#34;C&#34;를 삽입합니다.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
