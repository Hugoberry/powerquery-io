---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

レコード型が OPEN かどうかを返します。


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

レコード <code>type</code> が OPEN かどうかを示す <code>logical</code> を返します。


## Examples

### Example #1 
レコード &lt;code&gt;type [ A = number, ...]&lt;/code&gt; が開かれているかどうかを判断します。
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
