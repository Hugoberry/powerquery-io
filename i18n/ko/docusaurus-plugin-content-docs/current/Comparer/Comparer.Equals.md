---
title: Comparer.Equals
---

# Comparer.Equals


## Description

주어진 두 값이 같은지 확인한 후 결과를 논리값으로 반환합니다.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

제공된 <code>comparer</code>을(를) 사용하여 주어진 두 값 <code>x</code> 및 <code>y</code>에 대한 동등성 검사를 기반으로 <code>논리</code> 값을 반환합니다.       <div>         <code>comparer</code>은(는) 비교를 제어하는 데 사용되는 <code>Comparer</code>입니다.         비교자는 두 개의 인수를 받아들이고 첫 번째 값이 두 번째 값보다 작은지, 같은지, 큰지에 따라 -1, 0 또는 1을 반환하는 함수입니다.         비교자는 대소문자를 구분하지 않거나 문화권 및 로캘 인식 비교를 제공하는 데 사용할 수 있습니다.       </div>       <div>         다음 기본 제공 비교자는 수식 언어에서 사용할 수 있습니다.       </div>       <ul>         <li><code>Comparer.Ordinal</code>: 정확한 서수 비교를 수행하는 데 사용</li>         <li><code>Comparer.OrdinalIgnoreCase</code>: 대소문자를 구분하지 않는 정확한 서수 비교를 수행하는 데 사용</li>         <li> <code>Comparer.FromCulture</code>: 문화권 인식 비교를 수행하는 데 사용</li>       </ul>


## Examples

### Example #1 
&#34;en-US&#34; 로캘을 사용하여 &#34;1&#34;과 &#34;A&#34;를 비교한 후 값이 같은지 여부를 확인합니다.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
