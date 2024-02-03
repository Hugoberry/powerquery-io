---
title: Date.From
---

# Date.From


## Description

지정된 값에서 date를 만듭니다.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

지정된 <code>value</code>에서 <code>date</code> 값을 반환합니다. 선택적 <code>culture</code>(예: “en-US”)이(가) 제공될 수도 있습니다.지정된 <code>value</code>이(가) <code>null</code>이면 <code>Date.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>date</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값을 <code>date</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 표현에서 <code>date</code> 값으로 변환할 수 있습니다. 자세한 내용은 <code>Date.FromText</code>를 참조하세요.</li>        <li><code>datetime</code>: <code>value</code>의 날짜 구성 요소로 변환할 수 있습니다.</li>        <li><code>datetimezone</code>: <code>value</code>에 해당하는 현지 날짜/시간의 날짜 구성 요소로 변환할 수 있습니다.</li>        <li><code>number</code>: <code>value</code>(으)로 표현되는 OLE 자동화 날짜에 해당하는 날짜/시간의 날짜 구성 요소로 변환할 수 있습니다.</li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;43910&lt;/code&gt;을 &lt;code&gt;date&lt;/code&gt; 값으로 변환합니다.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt;을 &lt;code&gt;date&lt;/code&gt; 값으로 변환합니다.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
