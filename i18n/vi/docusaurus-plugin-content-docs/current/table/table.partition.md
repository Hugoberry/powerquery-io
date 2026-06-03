---
title: Table.Partition
---

# Table.Partition


Phân hoạch bảng thành danh sách các bảng dựa trên số lượng nhóm và cột được chỉ định.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Phân hoạch `table` thành danh sách số lượng bảng `groups` dựa trên giá trị của `column` và hàm `hash`. Hàm `hash` được áp dụng cho giá trị của hàng `column` để lấy giá trị băm cho hàng. Modulo giá trị băm `groups` xác định hàng sẽ được đưa vào bảng nào được trả về.

-   `table`: Bảng sẽ phân hoạch.
-   `column`: Cột sẽ băm để xác định hàng nằm trong bảng nào được trả về.
-   `groups`: Số lượng bảng mà bảng đầu vào sẽ được phân hoạch thành.
-   `hash`: Hàm được áp dụng để lấy giá trị băm.


## Examples

### Example #1
Phân hoạch bảng `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` thành 2 bảng trên cột \[a\] sử dụng giá trị của các cột ở dạng hàm băm.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
