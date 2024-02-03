---
title: Text.Combine
---

# Text.Combine


## Description

텍스트 값 목록을 하나의 텍스트 값으로 연결합니다.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

텍스트 값 목록(<code>texts</code>)을 단일 텍스트 값으로 결합한 결과를 반환합니다. <code>texts</code>에 있는 모든 <code>null</code> 값은 무시됩니다.    최종 결합된 텍스트에 사용되는 선택적 <code>separator</code>은(는) 지정할 수 있습니다.


## Examples

### Example #1 
텍스트 값 &#34;Seattle&#34;과 &#34;WA&#34;를 결합합니다.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
&#34;Seattle&#34;과 &#34;WA&#34; 텍스트 값을 쉼표와 공백으로 구분하여 결합합니다.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
&#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt;, &#34;WA&#34; 값을 쉼표와 공백으로 구분하여 결합합니다(&lt;code&gt;null&lt;/code&gt;은 무시됩니다).
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
