---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

指定されたレコード型の開かれたバージョンを返します (既に開かれている場合は同じ型)。


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

指定された <code>record</code> の開かれたバージョン <code>type</code> を返します (既に開かれている場合は同じ型)。


## Examples

### Example #1 
開かれたバージョンの &lt;code&gt;type [ A = number]&lt;/code&gt; を作成します。
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
