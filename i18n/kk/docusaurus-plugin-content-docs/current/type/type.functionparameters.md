---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Функция түрі параметрлерінің атауы орнатылған өріс мәндері және олардың тиісті түрлеріне орнатылған мәндері бар жазбаны береді.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

`type` параметрлерінің атауына орнатылған өріс мәндері және олардың тиісті түрлері орнатылған мәндері бар жазбаны береді.


## Examples

### Example #1
`(x as number, y as text)` функциясына арналған параметрлердің түрлерін табыңыз.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
