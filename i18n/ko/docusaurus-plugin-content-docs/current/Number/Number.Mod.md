---
title: Number.Mod
---

# Number.Mod


## Description

두 숫자에 대해 정수 나누기를 수행하고 나머지를 반환합니다.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

<code>number</code>을(를) <code>divisor</code>(으)로 정수 나누기를 수행한 결과의 나머지를 반환합니다.    <code>number</code> 또는 <code>divisor</code>이(가) Null인 경우 <code>Number.Mod</code>는 Null을 반환합니다.      <ul>        <li><code>number</code>: 피제수입니다.</li>        <li><code>divisor</code>: 제수입니다.</li>      </ul>


## Examples

### Example #1 
5를 3으로 나눈 나머지를 구합니다.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
