---
title: List.Alternate
---

# List.Alternate


## Description

목록의 모든 홀수 오프셋 요소로 구성된 목록을 반환합니다.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

목록의 모든 홀수 오프셋 요소로 구성된 목록을 반환합니다. <code>list</code> 목록에서 가져올 값과 건너뛸 값은 매개 변수에 따라 결정됩니다.    <ul>    <li><code>count</code>: 매번 건너뛸 값의 수를 지정합니다.</li>    <li><code>repeatInterval</code>: 건너뛰는 값 사이에서 추가할 값의 수를 나타내는 선택적 반복 간격입니다.</li>    <li><code>offset</code>: 초기 오프셋에서 값을 건너뛰기 시작할 위치를 나타내는 선택적 오프셋 매개 변수입니다.</li>    </ul>


## Examples

### Example #1 
\{1..10}에서 첫 번째 숫자를 건너뛴 목록을 만듭니다.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
\{1..10}에서 하나 걸러 하나씩 숫자를 건너뛴 목록을 만듭니다.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
\{1..10}에서 1부터 시작하여 하나 걸러 하나씩 숫자를 건너뛴 목록을 만듭니다.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
\{1..10}에서 1부터 시작하여 교대로 한 개의 값을 건너뛴 후 두 개의 값을 가져오는 목록을 만듭니다.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
