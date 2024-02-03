---
title: Text.Contains
---

# Text.Contains


## Description

텍스트에 부분 문자열이 포함되어 있는지 여부를 반환합니다.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

<code>text</code>이(가) 값 <code>substring</code>을(를) 포함하는지 여부를 감지합니다. 값을 찾으면 true를 반환합니다. 이 함수는 와일드카드나 정규식을 지원하지 않습니다.      <br />      <br />      선택적 인수 <code>comparer</code>을(를) 사용하여 대소문자를 구분하지 않거나 문화권 및 로케일 인식 비교를 지정할 수 있습니다.      수식 언어에서 다음 기본 제공 비교기를 사용할 수 있습니다.      <ul>        <li><code>Comparer.Ordinal</code>: 대소문자를 구분하는 순서 비교를 수행하는 데 사용됩니다</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 대소문자를 구분하지 않는 서수 비교를 수행하는 데 사용됩니다</li>        <li> <code>Comparer.FromCulture</code>: 문화 인식 비교를 수행하는 데 사용됩니다</li>      </ul>


## Examples

### Example #1 
&#34;Hello World&#34; 텍스트에 &#34;Hello&#34;가 포함되어 있는지 여부를 찾습니다.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
&#34;Hello World&#34; 텍스트에 &#34;hello&#34;가 포함되어 있는지 여부를 찾습니다.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
대소문자를 구분하지 않는 비교자를 사용하여 &#34;Hello World&#34; 텍스트에 &#34;hello&#34;가 포함되어 있는지 확인합니다.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
