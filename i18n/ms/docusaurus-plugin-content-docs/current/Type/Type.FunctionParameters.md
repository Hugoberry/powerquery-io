---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

Kembalikan rekod dengan nilai medan ditetapkan kepada nama parameter jenis fungsi, dan nilai mereka ditetapkan kepada jenis yang berkaitan dengan mereka.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

Kembalikan rekod dengan nilai medan yang ditetapkan kepada nama parameter <code>type</code>, dan nilai mereka ditetapkan kepada jenis yang berkaitan dengan mereka.


## Examples

### Example #1 
Cari jenis parameter untuk fungsi &lt;code&gt;(x as number, y as text)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
