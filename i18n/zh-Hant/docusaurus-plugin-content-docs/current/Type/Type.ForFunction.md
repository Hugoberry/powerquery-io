---
title: Type.ForFunction
---

# Type.ForFunction


## Description

使用特定的參數和傳回類型條件約束，傳回代表函數的類型。


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

從 <code>signature</code> 建立叫用函數所需的 <code>function type</code>、<code>ReturnType</code> 記錄和 <code>Parameters</code> 以及 <code>min</code>，與最少數目的引數。


## Examples

### Example #1 
為使用名為 X 之數字參數的函式建立類型並傳回數字。
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
