---
title: Character.ToNumber
---

# Character.ToNumber


## Description

문자를 숫자 값으로 변환합니다.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

<code>character</code>에 해당하는 숫자를 반환합니다.<br />    <br />    결과는 제공된 문자 또는 서로게이트 쌍으로 표시되는 21비트 유니코드 코드 포인트가 됩니다.  


## Examples

### Example #1 
문자를 해당하는 숫자 값으로 변환합니다.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
&#34;웃는 얼굴&#34; 스마일 기호의 UTF-16 서로게이트 쌍을 해당하는 16진수 코드 포인트로 변환합니다.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
