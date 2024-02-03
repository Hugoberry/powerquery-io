---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Phân hoạch <code>table</code> thành danh sách số lượng bảng <code>groups</code> dựa trên giá trị của <code>column</code> và hàm <code>hash</code>.    Hàm <code>hash</code> được áp dụng cho giá trị của hàng <code>column</code> để lấy giá trị băm cho hàng. Modulo giá trị băm <code>groups</code> xác định hàng sẽ được đưa vào bảng nào được trả về.    <ul>       <li><code>table</code>: Bảng sẽ phân hoạch.</li>       <li><code>column</code>: Cột sẽ băm để xác định hàng nằm trong bảng nào được trả về.</li>       <li><code>groups</code>: Số lượng bảng mà bảng đầu vào sẽ được phân hoạch thành.</li>       <li><code>hash</code>: Hàm được áp dụng để lấy giá trị băm.</li>    </ul>  


## Examples

### Example #1 
Phân hoạch bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; thành 2 bảng trên cột [a] sử dụng giá trị của các cột ở dạng hàm băm.
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
