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

Trả về danh sách khóa có thể trống cho loại bảng cho sẵn.<br />    <br />    Mỗi khóa được xác định bằng một bản ghi ở dạng sau:    <ul>      <li>        <code>Cột</code>: danh sách tên cột xác định khóa      </li>      <li>        <code>Chính</code>: <code>đúng</code> nếu khóa là khóa chính của bảng; nếu không, <code>sai</code>      </li>    </ul>    


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
