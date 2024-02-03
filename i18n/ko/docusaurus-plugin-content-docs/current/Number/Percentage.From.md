---
title: Percentage.From
---

# Percentage.From


## Description

지정된 값에서 백분율 값을 반환합니다.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

지정된 <code>value</code>에서 <code>percentage</code> 값을 반환합니다. 지정된 <code>value</code>이(가) <code>null</code>인 경우 <code>Percentage.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) 뒤에 백분율 기호가 있는 <code>text</code>인 경우 변환된 십진수가 반환됩니다. 그렇지 않은 경우 값은 <code>Number.From</code>을 사용하여 <code>number</code>로 변환됩니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;의 &lt;code&gt;percentage&lt;/code&gt; 값을 가져옵니다.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
