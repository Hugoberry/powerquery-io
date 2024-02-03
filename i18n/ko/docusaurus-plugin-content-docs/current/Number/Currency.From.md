---
title: Currency.From
---

# Currency.From


## Description

지정된 값에서 통화 값을 반환합니다.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

지정된 <code>value</code>에서 <code>currency</code> 값을 반환합니다. 지정된 <code>value</code>이(가) <code>null</code>이면 <code>Currency.From</code>에서 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) 통화 범위 내의 <code>number</code>이면 <code>value</code>의 소수부가 4자릿수로 반올림되어 반환됩니다. 지정된 <code>value</code>이(가) 기타 형식이면 <code>Number.FromText</code>를 사용하여 먼저 <code>number</code>로 변환합니다. 유효한 통화 범위는 <code>-922,337,203,685,477.5808</code>에서 <code>922,337,203,685,477.5807</code> 사이입니다. 사용할 수 있는 반올림 모드는 <code>Number.Round</code>를 참조하세요. 기본값은 <code>RoundingMode.ToEven</code>입니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
&lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;의 &lt;code&gt;currency&lt;/code&gt; 값을 가져옵니다.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
&lt;code&gt;RoundingMode.Down&lt;/code&gt;을 사용하여 &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;의 &lt;code&gt;currency&lt;/code&gt; 값을 가져옵니다.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
