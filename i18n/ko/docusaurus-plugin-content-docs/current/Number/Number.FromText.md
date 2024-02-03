---
title: Number.FromText
---

# Number.FromText


## Description

일반 텍스트 형식(&#34;15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;)에서 number를 만듭니다.


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

지정된 텍스트 값 <code>text</code>에서 <code>number</code> 값을 반환합니다. <ul>  <li><code>text</code>: number 값의 텍스트 표현입니다. 이 표현은 일반 number 형식(예: "15", "3,423.10" 또는 "5.0E-10")이어야 합니다.</li>  <li><code>culture</code>: <code>text</code>이(가) 해석되는 선택적 문화권(예: "en-US")입니다.</li> </ul>


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt;의 number 값을 가져옵니다.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;의 number 값을 가져옵니다.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
