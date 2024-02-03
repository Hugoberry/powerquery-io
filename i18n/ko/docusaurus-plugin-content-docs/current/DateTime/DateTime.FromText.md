---
title: DateTime.FromText
---

# DateTime.FromText


## Description

현지 및 범용 datetime 형식에서 datetimezone을 만듭니다.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

텍스트 표현 <code>text</code>의 <code>datetime</code> 값을 만듭니다. 추가 속성을 지정하기 위해 선택적 <code>record</code> 매개 변수 <code>options</code>이(가) 제공될 수 있습니다. <code>record</code>에는 다음 필드가 포함될 수 있습니다.<ul>   <li><code>Format</code>: 사용할 형식을 나타내는 <code>text</code> 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 및 https://go.microsoft.com/fwlink/?linkid=2180105를 참조하세요. 이 필드를 생략하거나 <code>null</code>을 제공하면 최선을 다해 날짜를 구문 분석하게 됩니다.</li>   <li><code>Culture</code> : <code>Format</code>이 Null이 아니면 <code>Culture</code>가 일부 형식 지정자를 제어합니다. 예를 들어, <code>“en-US”</code>에서 <code>“MMM”</code>은(는) <code>“Jan”, “Feb”, “Mar”, ...</code>이지만, <code>“ru-RU”</code>에서 <code>“MMM”</code>은(는) <code>“янв”, “фев”, “мар”, ...</code>입니다. <code>Format</code>이 <code>null</code>인 경우, <code>Culture</code>는 사용할 기본 형식을 제어합니다. <code>Culture</code>가 <code>null</code>이거나 생략된 경우, <code>Culture.Current</code>가 사용됩니다.</li></ul>레거시 워크플로를 지원하기 위해, <code>options</code>도 텍스트 값이 될 수 있습니다. 이는 <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>과(와) 동일한 동작을 갖습니다.


## Examples

### Example #1 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt;를 datetime 값으로 변환합니다.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
&lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt;를 datetime 값으로 변환합니다.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
&lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt;를 datetime 값으로 변환합니다.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
&lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt;를 datetime 값으로 변환합니다.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
