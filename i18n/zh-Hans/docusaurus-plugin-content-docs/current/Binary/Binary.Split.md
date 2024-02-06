---
title: Binary.Split
---

# Binary.Split


使用指定的页面大小将指定的二进制文件拆分为二进制文件列表。


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

将 <code>binary</code> 拆分为二进制文件列表，其中输出列表的第一个元素是包含源二进制文件     的第一个 <code>pageSize</code> 字节的二进制文件，输出列表的下一个元素是包含源二进制文件中下一个 <code>pageSize</code> 字节的二进制文件，等等。



## Category
Binary
