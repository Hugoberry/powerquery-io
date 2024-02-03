---
title: List.StandardDeviation
---

# List.StandardDeviation


## Description

샘플을 기준으로 한 예상 표준 편차를 반환합니다.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Details

<code>numbersList</code> 목록의 값에 대해 샘플을 기준으로 한 예상 표준 편차를 반환합니다.    <code>numbersList</code>이(가) 숫자 목록일 경우 숫자가 반환됩니다.    목록이 비어 있거나 목록의 항목이 <code>number</code> 형식이 아닌 경우에는 예외가 발생합니다.


## Examples

### Example #1 
숫자 1부터 5까지의 표준 편차를 구합니다.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
