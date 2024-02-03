---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

傳回記錄，包含函數類型參數名稱的資料行值的記錄，以及其相對應類型的值設定。


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

傳回記錄，包含 <code>type</code> 參數名稱的資料行值的記錄，以及其相對應類型的值設定。


## Examples

### Example #1 
尋找函數 &lt;code&gt;(x as number, y as text)&lt;/code&gt; 的參數類型。
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
