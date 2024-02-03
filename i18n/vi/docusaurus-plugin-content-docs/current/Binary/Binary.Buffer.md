---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Tải giá trị nhị phân trong bộ nhớ.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Đệm giá trị nhị phân trong bộ nhớ. Kết quả của thao tác gọi này là một giá trị nhị phân ổn định, tức là giá trị đó có độ dài và trật tự byte tất định. 


## Examples

### Example #1 
Tạo phiên bản ổn định của giá trị nhị phân.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
