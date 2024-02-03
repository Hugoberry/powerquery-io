---
title: Number.ToText
---

# Number.ToText


## Description

지정된 숫자를 텍스트로 변환합니다.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

숫자 값 <code>number</code>을(를) <code>format</code>에서 지정한 형식에 따라 텍스트 값으로 변환합니다.<br />    <br />    이 형식은 숫자를 변환하는 방법을 나타내는 텍스트 값입니다. 지원되는 형식 값에 대한 자세한 내용을 보려면 https://go.microsoft.com/fwlink/?linkid=2241210 및 https://go.microsoft.com/fwlink/?linkid=2240884에서 확인하세요.<br />    <br />    선택적 <code>culture</code>(예: "en-US")를 제공하여 <code>format</code>의 문화권 종속 동작을 제어할 수도 있습니다.


## Examples

### Example #1 
형식을 지정하지 않고 숫자를 텍스트로 변환합니다.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
숫자를 지수 형식으로 변환합니다.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
소수점 이하 한 자리만 있는 백분율 형식으로 숫자를 변환합니다.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
