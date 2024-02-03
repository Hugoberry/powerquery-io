---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Функция түрі параметрлерінің атауы орнатылған өріс мәндері және олардың тиісті түрлеріне орнатылған мәндері бар жазбаны береді.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

<code>type</code> параметрлерінің атауына орнатылған өріс мәндері және олардың тиісті түрлері орнатылған мәндері бар жазбаны береді.


## Examples

### Example #1 
&lt;code&gt;(x as number, y as text)&lt;/code&gt; функциясына арналған параметрлердің түрлерін табыңыз.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
