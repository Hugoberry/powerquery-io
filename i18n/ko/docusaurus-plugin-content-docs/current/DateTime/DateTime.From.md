---
title: DateTime.From
---

# DateTime.From


## Description

지정된 값에서 datetime을 만듭니다.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

지정된 <code>value</code>에서 <code>datetime</code> 값을 반환합니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.지정된 <code>value</code>이(가) <code>null</code>이면 <code>DateTime.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>datetime</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값을 <code>datetime</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 표현에서 <code>datetime</code> 값으로 변환할 수 있습니다. 자세한 내용은 <code>DateTime.FromText</code>를 참조하세요.</li>        <li><code>date</code>: 날짜 구성 요소로 <code>value</code>을(를) 사용하고 시간 구성 요소로 <code>12:00:00 AM</code>을 사용하여 <code>datetime</code>으로 변환할 수 있습니다.</li>        <li><code>datetimezone</code>: <code>value</code>에 해당하는 현지 <code>datetime</code>으로 변환할 수 있습니다.</li>        <li><code>time</code>: 날짜 구성 요소로 OLE 자동화 날짜 <code>0</code>에 해당하는 날짜를 사용하고 시간 구성 요소로 <code>value</code>을(를) 사용하여 <code>datetime</code>으로 변환할 수 있습니다.</li>        <li><code>number</code>: <code>value</code>(으)로 표현되는 OLE 자동화 날짜에 해당하는 <code>datetime</code>으로 변환할 수 있습니다. </li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;#time(06, 45, 12)&lt;/code&gt;를 &lt;code&gt;datetime&lt;/code&gt; 값으로 변환합니다.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
&lt;code&gt;#date(1975, 4, 4)&lt;/code&gt;를 &lt;code&gt;datetime&lt;/code&gt; 값으로 변환합니다.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
