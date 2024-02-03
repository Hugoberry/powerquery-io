---
title: Single.From
---

# Single.From


## Description

지정된 값에서 Single을 만듭니다.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

지정된 <code>value</code>에서 Single <code>number</code> 값을 반환합니다. 지정된 <code>value</code>이(가) <code>null</code>이면 <code>Single.From</code>에서 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) Single 범위 내의 <code>number</code>이면 <code>value</code>이(가) 반환되고, 그렇지 않으면 오류가 반환됩니다. <code>value</code>이(가) 기타 형식이면 <code>Number.FromText</code>를 사용하여 먼저 <code>number</code>로 변환합니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
&lt;code&gt;&#34;1.5&#34;&lt;/code&gt;의 Single &lt;code&gt;number&lt;/code&gt; 값을 가져옵니다.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
