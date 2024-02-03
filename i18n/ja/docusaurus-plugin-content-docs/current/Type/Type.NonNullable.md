---
title: Type.NonNullable
---

# Type.NonNullable


## Description

型から NULL 許容型以外の型を返します。


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

<code>type</code> から <code>nullable</code> 以外の型を返します。


## Examples

### Example #1 
NULL 許容型以外の &lt;code&gt;type nullable number&lt;/code&gt; を返します。
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
