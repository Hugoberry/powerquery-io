---
title: Duration.From
---

# Duration.From


## Description

지정된 값에서 duration을 만듭니다.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

지정된 <code>value</code>에서 <code>duration</code> 값을 반환합니다. 지정된 <code>value</code>이(가) <code>null</code>이면 <code>Duration.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>duration</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값을 <code>duration</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 경과 시간 형식(d.h:m:s)에서 <code>duration</code> 값으로 변환할 수 있습니다. 자세한 내용은 <code>Duration.FromText</code>를 참조하세요.</li>        <li><code>number</code>: <code>value</code>(으)로 표현된 정수 및 소수 일 수에 해당하는 <code>duration</code>으로 변환할 수 있습니다.</li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;2.525&lt;/code&gt;를 &lt;code&gt;duration&lt;/code&gt; 값으로 변환합니다.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
