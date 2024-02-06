---
title: Binary.Split
---

# Binary.Split


使用指定頁面大小將指定二進位分割為二進位清單。


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

將 <code>binary</code> 分割為二進位清單，其中輸出清單的第一個元素是包含來自     來源二進位的前 <code>pageSize</code> 個位元組的二進位，輸出清單的下一個元素是包含來自來源二進位中下一個 <code>pageSize</code> 位元組的二進位，以此類推。



## Category
Binary
