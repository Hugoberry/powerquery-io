---
title: Value.FromText
---

# Value.FromText


## Description

텍스트 표현에서 강력한 형식의 값을 만듭니다.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

텍스트 표현 <code>text</code>에서 값을 디코딩하여 적절한 형식의 값으로 해석합니다.    <code>Value.FromText</code>는 텍스트 값을 받아 숫자, 논리 값, null 값, datetime 값 또는 텍스트 값을 반환합니다. 빈 텍스트 값은 null 값으로 해석됩니다.    선택적 <code>culture</code>(예: "en-US")이(가) 제공될 수도 있습니다.



## Category
Text.Conversions from and to text
