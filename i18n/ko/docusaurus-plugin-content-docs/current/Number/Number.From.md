---
title: Number.From
---

# Number.From


## Description

지정된 값에서 number를 만듭니다.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

지정된 <code>value</code>에서 <code>number</code> 값을 반환합니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.지정된 <code>value</code>이(가) <code>null</code>이면 <code>Number.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>number</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값을 <code>number</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 표현에서 <code>number</code> 값으로 변환할 수 있습니다. “15”, “3,423.10”, “5.0E-10” 같은 일반 텍스트 형식이 처리됩니다. 자세한 내용은 <code>Number.FromText</code>를 참조하세요.</li>        <li><code>logical</code>: <code>true</code>의 경우 1로 변환되고, <code>false</code>의 경우 0으로 변환됩니다.</li>        <li><code>datetime</code>: OLE 자동화 날짜에 해당하는 값이 포함된 배정밀도 부동 소수점 숫자로 변환할 수 있습니다.</li>        <li><code>datetimezone</code>: 현지 날짜 및 시간 <code>value</code>의 OLE 자동화 날짜에 해당하는 값이 포함된 배정밀도 부동 소수점 숫자로 변환할 수 있습니다.</li>        <li><code>date</code>: OLE 자동화 날짜에 해당하는 값이 포함된 배정밀도 부동 소수점 숫자로 변환할 수 있습니다.</li>        <li><code>time</code>: 소수 일 수로 표현됩니다.</li>        <li><code>duration</code>: 정수 및 소수 일 수로 표현됩니다.</li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;&#34;4&#34;&lt;/code&gt;의 &lt;code&gt;number&lt;/code&gt; 값을 가져옵니다.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
&lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt;의 &lt;code&gt;number&lt;/code&gt; 값을 가져옵니다.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
&lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;의 &lt;code&gt;number&lt;/code&gt; 값을 가져옵니다.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
