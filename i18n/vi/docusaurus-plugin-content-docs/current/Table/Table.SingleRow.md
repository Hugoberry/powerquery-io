---
title: Table.SingleRow
---

# Table.SingleRow


## Description

Trả về hàng duy nhất trong bảng.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Details

Trả về hàng duy nhất trong một hàng <code>table</code>. Nếu <code>table</code> có nhiều hàng thì một ngoại lệ được đưa ra.


## Examples

### Example #1 
Trả về hàng đơn nhất trong bảng.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
