---
title: Type.OpenRecord
---

# Type.OpenRecord


傳回指定記錄類型的開放版本 (如果已經是開放版本，則要是相同類型)。


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

傳回指定 <code>record</code> <code>type</code> 的開放版本 (如果已經是開放版本，則要是相同類型)。


## Examples

### Example #1 
建立開放版本的 &lt;code&gt;type [ A = number]&lt;/code&gt;。
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
