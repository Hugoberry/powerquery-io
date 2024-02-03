---
title: Text.Format
---

# Text.Format


## Description

서식 문자열 및 인수를 사용하여 서식 있는 텍스트를 반환합니다.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

목록 또는 레코드의 <code>arguments</code>을(를) 서식 문자열 <code>formatString</code>에 적용하여 만든 서식 있는 텍스트를 반환합니다. 선택적 <code>culture</code>(예: "en-US")이(가) 제공될 수도 있습니다.


## Examples

### Example #1 
숫자 목록의 서식을 지정합니다.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
레코드의 여러 데이터 형식의 서식을 미국(영어) 문화권에 따라 지정하세요.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
