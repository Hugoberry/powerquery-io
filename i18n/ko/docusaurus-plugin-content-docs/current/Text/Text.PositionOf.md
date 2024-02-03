---
title: Text.PositionOf
---

# Text.PositionOf


## Description

값의 첫 번째 위치를 반환합니다(찾을 수 없는 경우 -1 반환).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

<code>text</code>에 있는 <code>substring</code> 텍스트 값의 지정된 발생 위치를 반환합니다.    선택적 매개 변수 <code>occurrence</code>을(를) 사용하여 반환할 발생 위치를 지정할 수 있습니다(기본값은 첫 발생 위치).    <code>substring</code>을(를) 찾을 수 없는 경우 -1을 반환합니다.      <div>        <code>comparer</code>은(는) 비교를 제어하는 데 사용되는 <code>Comparer</code>입니다. 비교자를 사용하여 대/소문자 비구분 비교 또는 문화권 및 로캘 인식 비교를 제공할 수 있습니다.      </div>      <div>        수식 언어에서는 다음과 같은 기본 제공 비교자를 사용할 수 있습니다.      </div>      <ul>        <li><code>Comparer.Ordinal</code>: 정확한 서수 비교를 수행하는 데 사용됨</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: 정확한 대/소문자 비구분 서수 비교를 수행하는 데 사용됨</li>        <li> <code>Comparer.FromCulture</code>: 문화권 인식 비교를 수행하는 데 사용됨</li>      </ul>


## Examples

### Example #1 
&#34;Hello, World! Hello, World!&#34; 텍스트에서 &#34;World&#34;의 첫 번째 발생 위치를 가져옵니다.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
&#34;Hello, World! Hello, World!&#34;에서 &#34;World&#34;의 마지막 발생 위치를 가져옵니다.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
