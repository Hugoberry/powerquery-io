---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

지정된 값에서 datetimezone을 만듭니다.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

지정된 <code>value</code>에서 <code>datetimezone</code> 값을 반환합니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.지정된 <code>value</code>이(가) <code>null</code>이면 <code>DateTimeZone.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>datetimezone</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값을 <code>datetimezone</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 표현에서 <code>datetimezone</code> 값으로 변환할 수 있습니다. 자세한 내용은 <code>DateTimeZone.FromText</code>를 참조하세요.</li>        <li><code>date</code>: 날짜 구성 요소로 <code>value</code>을(를) 사용하고 시간 구성 요소로 <code>12:00:00 AM</code>을 사용하고 현지 표준 시간대에 해당하는 오프셋을 사용하여 <code>datetimezone</code>으로 변환할 수 있습니다.</li>        <li><code>datetime</code>: 날짜/시간으로 <code>value</code>을(를) 사용하고 현지 표준 시간대에 해당하는 오프셋을 사용하여 <code>datetimezone</code>으로 변환할 수 있습니다.</li>        <li><code>time</code>: 날짜 구성 요소로 OLE 자동화 날짜 <code>0</code>에 해당하는 날짜를 사용하고 시간 구성 요소로 <code>value</code>을(를) 사용하고 현지 표준 시간대에 해당하는 오프셋을 사용하여 <code>datetimezone</code>으로 변환할 수 있습니다.</li>        <li><code>number</code>: <code>value</code>(으)로 표현되는 OLE 자동화 날짜에 해당하는 날짜/시간을 사용하고 현지 표준 시간대에 해당하는 오프셋을 사용하여 <code>datetimezone</code>으로 변환할 수 있습니다.</li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt;을 &lt;code&gt;datetimezone&lt;/code&gt; 값으로 변환합니다.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
