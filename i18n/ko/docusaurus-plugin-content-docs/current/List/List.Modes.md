---
title: List.Modes
---

# List.Modes


## Description

목록에서 가장 자주 나타나는 값의 목록을 반환합니다.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list</code> 목록에서 가장 자주 나타나는 항목을 반환합니다. 목록이 비어 있으면 예외가 발생합니다. 동일한 최대 빈도를 갖는 여러 항목이 나타날 경우 마지막 항목이 선택됩니다.    선택적 <code>comparisonCriteria</code> 값 <code>equationCriteria</code>을(를) 지정하여 같음 테스트를 제어할 수 있습니다. 


## Examples

### Example #1 
&lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 목록에서 가장 자주 나타나는 항목을 찾습니다.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
