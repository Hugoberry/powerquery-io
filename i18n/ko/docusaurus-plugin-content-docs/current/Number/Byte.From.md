---
title: Byte.From
---

# Byte.From


## Description

지정된 값에서 8비트 정수를 만듭니다.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

지정된 <code>value</code>에서 8비트 정수 <code>number</code> 값을 반환합니다. 지정된 <code>value</code>이(가) <code>null</code>이면 <code>Byte.From</code>에서 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) 소수 부분 없이 8비트 정수 범위 내의 <code>number</code>이면 <code>value</code>이(가) 반환됩니다. 소수 부분이 있으면 지정된 반올림 모드로 숫자가 반올림됩니다. 기본 반올림 모드는 <code>RoundingMode.ToEven</code>입니다. <code>value</code>이(가) 다른 형식이면 <code>Number.FromText</code>를 사용하여 먼저 <code>number</code>로 변환합니다. 사용할 수 있는 반올림 모드는 <code>Number.Round</code>를 참조하세요. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt;의 8비트 정수 &lt;code&gt;number&lt;/code&gt; 값을 가져옵니다.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;를 사용하여 &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;의 8비트 정수 &lt;code&gt;number&lt;/code&gt; 값을 가져옵니다.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
