---
title: Function.From
---

# Function.From


## Description

단일 목록 인수를 사용하는 함수 위에 특정 매개 변수 서명으로 함수를 만듭니다.


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

단항 함수 <code>function</code>을(를) 사용하고, 해당 인수에서 목록을 생성하여 <code>function</code>에 전달하는 <code>functionType</code> 유형의 새 함수를 만듭니다.


## Examples

### Example #1 
해당 인수를 모두 더하며 인수가 두 개인 함수로 List.Sum을 변환합니다.
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
목록을 사용하는 함수를 인수가 두 개인 함수로 변환합니다.
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
