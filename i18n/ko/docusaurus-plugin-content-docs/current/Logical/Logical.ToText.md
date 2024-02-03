---
title: Logical.ToText
---

# Logical.ToText


## Description

지정된 논리값에 따라 텍스트 &#34;true&#34; 또는 &#34;false&#34;를 반환합니다.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

논리값 <code>logicalValue</code>(<code>true</code> 또는 <code>false</code>)에서 텍스트 값을 만듭니다. <code>logicalValue</code>이(가) 논리값이 아니면 예외가 발생합니다.


## Examples

### Example #1 
논리값 &lt;code&gt;true&lt;/code&gt;에서 텍스트 값을 만듭니다.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
