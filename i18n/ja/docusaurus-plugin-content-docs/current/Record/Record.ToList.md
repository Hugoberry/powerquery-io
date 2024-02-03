---
title: Record.ToList
---

# Record.ToList


## Description

入力レコードのフィールド値を含む値のリストを返します。


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Details

入力 <code>record</code> からフィールド値を含む値のリストを返します。


## Examples

### Example #1 
レコードからフィールド値を抽出します。
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
