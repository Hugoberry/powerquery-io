---
title: Text.EndsWith
---

# Text.EndsWith


## Description

텍스트가 지정한 값으로 끝나는지 여부를 나타냅니다.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

지정된 텍스트(<code>text</code>)가 지정된 값(<code>substring</code>)으로 끝나는지 여부를 나타냅니다. 표시는 대/소문자를 구분합니다.      <div>        <code>comparer</code>은(는) 비교를 제어하는 데 사용되는 <code>Comparer</code>입니다. 비교자를 사용하여 대/소문자 비구분 비교 또는 문화권 및 로캘 인식 비교를 제공할 수 있습니다.      </div>      <div>        수식 언어에서는 다음과 같은 기본 제공 비교자를 사용할 수 있습니다.      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 정확한 서수 비교를 수행하는 데 사용됨</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 정확한 대/소문자 비구분 서수 비교를 수행하는 데 사용됨</li>        <li> <code>Comparer.FromCulture</code>: 문화권 인식 비교를 수행하는 데 사용됨</li>      </ul>


## Examples

### Example #1 
&#34;Hello, World&#34;가 &#34;world&#34;로 끝나는지 확인합니다.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
&#34;Hello, World&#34;가 &#34;World&#34;로 끝나는지 확인합니다.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
