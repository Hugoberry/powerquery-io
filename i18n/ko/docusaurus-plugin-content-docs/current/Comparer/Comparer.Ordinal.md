---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

서수 규칙을 사용하여 값을 비교하는 비교자 함수를 반환합니다.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

서수 규칙을 사용하여 제공된 값 <code>x</code> 및 <code>y</code>을(를) 비교하는 비교자 함수를 반환합니다.<br />       <br />       비교자 함수는 두 개의 인수를 받아들이고 첫 번째 값이 두 번째 값보다 작은지, 같은지, 큰지에 따라 -1, 0 또는 1을 반환합니다.    


## Examples

### Example #1 
서수 규칙을 사용하여 &#34;encyclopædia&#34;와 &#34;encyclopaedia&#34;가 같은지 확인합니다. 이 두 값이 같은지 확인할 때 &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt;를 사용합니다. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
