---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

傳回指定記錄類型的封閉版本 (如果己經是封閉版本則需為相同類型)。


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

傳回指定 <code>record</code> <code>type</code> 的封閉版本 (如果己經是封閉版本則需為相同類型)。


## Examples

### Example #1 
建立 &lt;code&gt;type [ A = number,…]&lt;/code&gt; 的封閉版本。
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
