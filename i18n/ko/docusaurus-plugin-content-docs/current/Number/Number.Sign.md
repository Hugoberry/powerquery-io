---
title: Number.Sign
---

# Number.Sign


## Description

숫자가 양수이면 1을, 음수이면 -1을, 0이면 0을 반환합니다.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Details

<code>number</code>이(가) 양수이면 1을, 음수이면 -1을, 0이면 0을 반환합니다.    <code>number</code>이(가) Null인 경우 <code>Number.Sign</code>은 Null을 반환합니다.


## Examples

### Example #1 
182의 부호를 확인합니다.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
-182의 부호를 확인합니다.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
0의 부호를 확인합니다.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
