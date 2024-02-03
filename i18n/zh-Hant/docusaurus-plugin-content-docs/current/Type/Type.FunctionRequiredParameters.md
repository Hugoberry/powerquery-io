---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

傳回數字，表示叫用函數類型所需的最少參數數目。


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

傳回數字，表示叫用函數輸入 <code>type</code> 所需的最少參數數目。


## Examples

### Example #1 
尋找函數 &lt;code&gt;(x as number, optional y as text)&lt;/code&gt; 的必要參數數目。
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
