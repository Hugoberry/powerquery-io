---
title: Logical.FromText
---

# Logical.FromText


## Description

텍스트 값 &#34;true&#34; 및 &#34;false&#34;에서 logical 값을 만듭니다.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

텍스트 값 <code>text</code>("true" 또는 "false")에서 logical 값을 만듭니다. <code>text</code>에 다른 문자열이 포함되어 있으면 예외가 발생합니다. 텍스트 값 <code>text</code>은(는) 대/소문자를 구분하지 않습니다.


## Examples

### Example #1 
텍스트 문자열 &#34;true&#34;에서 logical 값을 만듭니다.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
텍스트 문자열 &#34;a&#34;에서 logical 값을 만듭니다.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
