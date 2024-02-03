---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Trả về một bảng có các cột được ánh xạ tới các thuộc tính của một thực thể trong Common Data Model, bao gồm các loại dữ liệu.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

Trả về một bảng có các cột được ánh xạ tới các thuộc tính của một thực thể trong Common Data Model, bao gồm các loại dữ liệu. Các cột từ định nghĩa thực thể sẽ được thêm nếu không được ánh xạ và mọi cột chưa được ánh xạ sẽ bị loại bỏ.


