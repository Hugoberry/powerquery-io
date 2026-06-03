---
title: Type.TableKeys
---

# Type.TableKeys


Trả về danh sách khóa có thể trống cho loại bảng cho sẵn.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Trả về danh sách khóa có thể trống cho loại bảng cho sẵn.  
  
Mỗi khóa được xác định bằng một bản ghi ở dạng sau:

-   `Cột`: danh sách tên cột xác định khóa
-   `Chính`: `đúng` nếu khóa là khóa chính của bảng; nếu không, `sai`


## Examples

### Example #1
Trả về thông tin khóa cho loại bảng.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
