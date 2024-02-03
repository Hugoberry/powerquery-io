---
title: Number.Round
---

# Number.Round


## Description

반올림된 숫자를 반환합니다. 자릿수와 반올림 모드를 지정할 수 있습니다.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

<code>number</code>을(를) 가장 가까운 숫자로 반올림한 결과를 반환합니다. <code>number</code>이(가) Null이면 <code>Number.Round</code>는 Null을 반환합니다.<br />      <br />      기본적으로, <code>number</code>은(는) 가장 가까운 정수로 반올림되고 연결은 가장 가까운 짝수로 반올림하여 끊어집니다(<code>RoundingMode.ToEven</code> 사용, “은행원 반올림”이라고도 함).<br />      <br />      그러나 이러한 기본값은 다음 선택적 매개 변수를 통해 재정의할 수 있습니다.      <ul>        <li><code>digits</code>: <code>number</code>이(가) 지정된 10진수 수로 반올림되도록 합니다.</li>        <li><code>roundingMode</code>: <code>number</code>이(가) 두 개의 잠재적인 반올림된 값 사이의 중간점에 있는 경우 기본 연결 끊기 동작을 재정의합니다      (가능한 값은 <code>RoundingMode.Type</code> 참조).</li>      </ul>


## Examples

### Example #1 
1.234를 가장 가까운 정수로 반올림합니다.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
1.56을 가장 가까운 정수로 반올림합니다.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
1.2345를 소수점 이하 두 자리로 반올림합니다.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
1.2345를 소수점 이하 세 자리로 올림합니다.
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
1.2345를 소수점 이하 세 자리로 내림합니다.
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
