---
title: Logical.From
---

# Logical.From


## Description

지정된 값에서 logical을 만듭니다.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

지정된 <code>value</code>에서 <code>logical</code> 값을 반환합니다. 지정된 <code>value</code>이(가) <code>null</code>이면 <code>Logical.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>logical</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값을 <code>logical</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 값(<code>“true”</code> 또는 <code>“false”</code>)에서 <code>logical</code> 값으로 변환할 수 있습니다. 자세한 내용은 <code>Logical.FromText</code>를 참조하세요.</li>        <li><code>number</code>: <code>value</code>이(가) <code>0</code>과 같으면 <code>false</code>로 변환되고, 그렇지 않으면 <code>true</code>로 변환됩니다.</li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;2&lt;/code&gt;를 &lt;code&gt;logical&lt;/code&gt; 값으로 변환합니다.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
