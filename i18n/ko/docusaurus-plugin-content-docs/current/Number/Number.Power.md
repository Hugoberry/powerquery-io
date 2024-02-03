---
title: Number.Power
---

# Number.Power


## Description

숫자를 지정된 지수로 거듭제곱합니다.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

<code>number</code>을(를) <code>power</code>제곱한 결과를 반환합니다.    <code>number</code> 또는 <code>power</code>이(가) Null인 경우 <code>Number.Power</code>는 Null을 반환합니다.      <ul>        <li><code>number</code>: 밑입니다.</li>        <li><code>power</code>: 지수입니다.</li>      </ul>


## Examples

### Example #1 
5의 3제곱을 구합니다.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
