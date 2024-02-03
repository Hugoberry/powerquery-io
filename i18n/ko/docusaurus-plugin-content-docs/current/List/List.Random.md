---
title: List.Random
---

# List.Random


## Description

난수 목록을 반환합니다.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

생성할 값 수와 선택적 초기값을 지정하여 0 및 1 사이의 난수 목록을 반환합니다.<ul>   <li><code>count</code>: 생성할 난수의 수입니다.</li>   <li><code>seed</code>: <i>[옵션]</i> 난수 생성기를 시드하는 데 사용되는 숫자 값입니다. 생략할 경우 이 함수를 호출할 때마다 고유한 난수 목록이 생성됩니다. 숫자로 초기값을 지정하면 이 함수를 호출할 때마다 동일한 난수 목록이 생성됩니다.</li></ul>


## Examples

### Example #1 
3개의 난수가 포함된 목록을 만듭니다.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
시드 값을 지정하여 3개의 난수가 포함된 목록을 만듭니다.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
