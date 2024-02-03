---
title: Binary.From
---

# Binary.From


## Description

지정된 값에서 binary를 만듭니다.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

지정된 <code>value</code>에서 <code>binary</code> 값을 반환합니다. 지정된 <code>value</code>이(가) <code>null</code>이면 <code>Binary.From</code>은 <code>null</code>을 반환합니다. 지정된 <code>value</code>이(가) <code>binary</code>이면 <code>value</code>이(가) 반환됩니다. 다음 형식의 값을 <code>binary</code> 값으로 변환할 수 있습니다.      <ul>        <li><code>text</code>: 텍스트 표현에서 <code>binary</code> 값으로 변환할 수 있습니다. 자세한 내용은 <code>Binary.FromText</code>를 참조하세요.</li>      </ul><code>value</code>이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1 
&lt;code&gt;&#34;1011&#34;&lt;/code&gt;의 &lt;code&gt;binary&lt;/code&gt; 값을 가져옵니다.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
