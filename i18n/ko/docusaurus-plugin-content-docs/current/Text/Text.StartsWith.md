---
title: Text.StartsWith
---

# Text.StartsWith


## Description

텍스트가 지정된 값으로 시작되는지 여부를 나타냅니다.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

<code>text</code> 텍스트 값이 <code>substring</code> 텍스트 값으로 시작하면 true를 반환합니다.      <ul>        <li><code>text</code>: <i></i> 검색할 <code>text</code> 값</li>        <li><code>substring</code>: <i></i> <code>substring</code>에서 검색할 하위 문자열인 <code>text</code> 값</li>        <li><code>comparer</code>: <i>[Optional]</i> 비교를 제어하는 데 사용되는 <code>Comparer</code>입니다. 예를 들면 <code>Comparer.OrdinalIgnoreCase</code>를 사용하여 대/소문자를 구분하지 않는 검색을 수행할 수 있습니다.</li>      </ul>      <div>        <code>comparer</code>은(는) 비교를 제어하는 데 사용되는 <code>Comparer</code>입니다. 비교자를 사용하여 대/소문자 비구분 비교 또는 문화권 및 로캘 인식 비교를 제공할 수 있습니다.      </div>      <div>        수식 언어에서는 다음과 같은 기본 제공 비교자를 사용할 수 있습니다.      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 정확한 서수 비교를 수행하는 데 사용됨</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 정확한 대/소문자 비구분 서수 비교를 수행하는 데 사용됨</li>        <li> <code>Comparer.FromCulture</code>: 문화권 인식 비교를 수행하는 데 사용됨</li>      </ul>


## Examples

### Example #1 
텍스트 &#34;Hello, World&#34;가 텍스트 &#34;hello&#34;로 시작되는지 확인합니다.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
텍스트 &#34;Hello, World&#34;가 텍스트 &#34;Hello&#34;로 시작되는지 확인합니다.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
