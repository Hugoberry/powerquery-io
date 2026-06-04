---
title: Character.FromNumber
---

# Character.FromNumber


숫자를 텍스트 문자로 변환합니다.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

숫자에 해당하는 문자를 반환합니다.  
  
제공된 `number`은(는) 21비트 유니코드 코드 포인트여야 합니다.


## Examples

### Example #1
숫자를 해당하는 문자 값으로 변환합니다.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2
문자를 숫자로 변환한 후 다시 변환합니다.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3
"웃는 얼굴" 스마일 기호의 16진수 코드 포인트를 해당하는 UTF-16 서로게이트 쌍으로 변환합니다.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
