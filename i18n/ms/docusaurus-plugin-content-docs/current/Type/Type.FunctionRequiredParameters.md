---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Kembalikan nombor yang menentukan nombor minimum parameter yang diperlukan untuk memulakan jenis fungsi.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Kembalikan nombor yang menentukan nombor minimum parameter yang diperlukan untuk memulakan input <code>type</code> fungsi.


## Examples

### Example #1 
Cari bilangan parameter yang diperlukan bagi fungsi &lt;code&gt;(x as number, optional y as text)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
