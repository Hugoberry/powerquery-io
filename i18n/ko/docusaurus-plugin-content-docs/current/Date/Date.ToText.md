---
title: Date.ToText
---

# Date.ToText


## Description

date 값의 텍스트 표현을 반환합니다.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

<code>date</code>의 텍스트 표현을 반환합니다. 추가 속성을 지정하기 위해 선택적 <code>record</code> 매개 변수 <code>options</code>이(가) 제공될 수 있습니다. <code>culture</code>은(는) 레거시 워크플로에만 사용됩니다. <code>record</code>에는 다음 필드가 포함될 수 있습니다.<ul>   <li><code>Format</code>:사용할 형식을 나타내는 <code>text</code> 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 및 https://go.microsoft.com/fwlink/?linkid=2180105를 참조하세요. 이 필드를 생략하거나 <code>null</code>을 제공하면 <code>Culture</code>에서 정의한 기본값을 사용하여 날짜 형식이 지정됩니다.</li>   <li><code>Culture</code>: <code>Format</code>이 Null이 아니면 <code>Culture</code>가 일부 형식 지정자를 제어합니다. 예를 들어, <code>“en-US”</code>에서 <code>“MMM”</code>은(는) <code>“Jan”, “Feb”, “Mar”, ...</code>이지만, <code>“ru-RU”</code>에서 <code>“MMM”</code>은(는) <code>“янв”, “фев”, “мар”, ...</code>입니다. <code>Format</code>이 <code>null</code>인 경우, <code>Culture</code>는 사용할 기본 형식을 제어합니다. <code>Culture</code>가 <code>null</code>이거나 생략된 경우, <code>Culture.Current</code>가 사용됩니다.</li></ul>레거시 워크플로를 지원하기 위해, <code>options</code> 및 <code>culture</code>도 텍스트 값이 될 수 있습니다. 이는 <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>과(와) 동일한 동작을 갖습니다.


## Examples

### Example #1 
&lt;code&gt;#date(2010, 12, 31)&lt;/code&gt;을 &lt;code&gt;text&lt;/code&gt; 값으로 변환합니다. &lt;i&gt;결과 출력은 현재 문화권에 따라 다를 수 있습니다.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
사용자 지정 형식 및 독일어 문화권을 사용하여 변환합니다.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
양력에서 2000년 1월 1일에 해당하는 회교실 달력의 연도를 찾습니다.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
