---
title: Time.From
---

# Time.From


## Description

지정된 값에서 시간을 만듭니다.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

지정된 <code>value</code>에서 <code>time</code> 값을 반환합니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.지정된 <code>value</code>이(가) <code>null</code>이면 <code>Time.From</code>이 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>time</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값은 <code>time</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 표현의 <code>time</code> 값. 자세한 내용은 <code>Time.FromText</code>를 참조하세요.</li>        <li><code>datetime</code>: <code>value</code>의 시간 구성 요소.</li>        <li><code>datetimezone</code>: <code>value</code>의 현지 날짜/시간에 해당하는 값의 시간 구성 요소.</li>        <li><code>number</code>: <code>value</code>(으)로 표현되는 소수 일 수에 해당하는 <code>time</code>. <code>value</code>이(가) 음수이거나 1보다 크거나 같으면 오류가 반환됩니다.</li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;0.7575&lt;/code&gt;를 &lt;code&gt;time&lt;/code&gt; 값으로 변환합니다.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt;을 &lt;code&gt;time&lt;/code&gt; 값으로 변환합니다.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
