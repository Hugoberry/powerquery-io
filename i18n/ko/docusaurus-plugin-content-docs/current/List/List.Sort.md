---
title: List.Sort
---

# List.Sort


## Description

지정된 조건에 따라 데이터 목록을 정렬합니다.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

지정된 선택적 기준에 따라 데이터 목록 <code>list</code>을(를) 정렬합니다.    선택적 매개 변수 <code>comparisonCriteria</code>를 비교 기준으로 지정할 수 있습니다. 이 작업은 다음 값을 사용할 수 있습니다.      <ul>      <li> 순서를 제어하기 위해 비교 기준은 순서 열거형 값일 수 있습니다(<code>Order.Descending</code>, <code>Order.Ascending</code>).</li>     <li> 정렬에 사용할 키를 계산하려면 인수 1개의 함수를 사용할 수 있습니다. </li>     <li> 키와 제어 순서를 모두 선택하기 위해 비교 기준은 키와 순서를 포함하는 목록일 수 있습니다(<code>\{each 1 / _, Order.Descending}</code>).</li>    <li> 비교를 완전히 제어하기 위해 2개의 인수로 구성된 함수를 사용할 수 있습니다. 이 함수는 목록에서 두 항목(순서에 관계없이 두 항목)을 전달합니다. 함수는 다음 값 중 하나를 반환해야 합니다.     <ul>         <li> <code>-1</code>: 첫 번째 항목이 두 번째 항목보다 작습니다.</li>      <li> <code>0</code>: 항목이 동일합니다.</li>      <li> <code>1</code>: 첫 번째 항목 두 번째 항목보다 큽니다.</li>      </ul>      Value.Compare는 이 논리를 위임하는 데 사용할 수 있는 메서드입니다. </li>      </ul>


## Examples

### Example #1 
\{2, 3, 1} 목록을 정렬합니다.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
\{2, 3, 1} 목록을 내림차순으로 정렬합니다.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Value.Compare 메서드를 사용하여 \{2, 3, 1} 목록을 내림차순으로 정렬합니다.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
