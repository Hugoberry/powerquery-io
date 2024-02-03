---
title: Time.FromText
---

# Time.FromText


## Description

현지 및 범용 및 사용자 지정 Time 형식에서 Time을 만듭니다.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

텍스트 표현 <code>text</code>의 <code>time</code> 값을 만듭니다. 추가 속성을 지정하기 위해 선택적 <code>record</code> 매개 변수 <code>options</code>이(가) 제공될 수 있습니다. <code>record</code>에는 다음 필드가 포함될 수 있습니다.<ul>   <li><code>Format</code>: 사용할 형식을 나타내는 <code>text</code> 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 및 https://go.microsoft.com/fwlink/?linkid=2180105를 참조하세요. 이 필드를 생략하거나 <code>null</code>을 제공하면 최선을 다해 날짜를 구문 분석하게 됩니다.</li>   <li><code>Culture</code>: <code>Format</code>이 Null이 아니면 <code>Culture</code>가 일부 형식 지정자를 제어합니다. 예를 들어, <code>“en-US”</code>에서 <code>"tt"</code>은(는) <code>"AM" or "PM"</code>이지만, <code>"ar-EG"</code>에서 <code>"tt"</code>은(는) <code>"ص" or "م"</code>입니다. <code>Format</code>이 <code>null</code>인 경우, <code>Culture</code>는 사용할 기본 형식을 제어합니다. <code>Culture</code>가 <code>null</code>이거나 생략된 경우, <code>Culture.Current</code>가 사용됩니다.</li></ul>레거시 워크플로를 지원하기 위해, <code>options</code>도 텍스트 값이 될 수 있습니다. 이는 <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>과(와) 동일한 동작을 갖습니다.


## Examples

### Example #1 
&lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt;을 Time 값으로 변환합니다.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
&lt;code&gt;&#34;1012&#34;&lt;/code&gt;를 시간 값으로 변환합니다.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
&lt;code&gt;&#34;10&#34;&lt;/code&gt;을 시간 값으로 변환합니다.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
