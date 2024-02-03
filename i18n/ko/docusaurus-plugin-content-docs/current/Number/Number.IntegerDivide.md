---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

두 숫자를 나눈 후 결과의 정수 부분을 반환합니다.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

숫자 <code>number1</code>을(를) 다른 숫자 <code>number2</code>(으)로 나눈 결과의 정수 부분을 반환합니다.    <code>number1</code> 또는 <code>number2</code>이(가) Null인 경우 <code>Number.IntegerDivide</code>는 Null을 반환합니다.      <ul>        <li><code>number1</code>: 피제수입니다.</li>        <li><code>number2</code>: 제수입니다.</li>      </ul>


## Examples

### Example #1 
6을 4로 나눕니다.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
8.3을 3으로 나눕니다.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
