---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Trả về một loại bảng mới với tất cả các khóa được thay thế bằng danh sách khóa được chỉ định.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Trả về một loại bảng mới với tất cả các khóa được thay thế bằng danh sách khóa được chỉ định.  
  
Mỗi khóa được xác định bằng một bản ghi ở dạng sau:

-   `Cột`: danh sách tên cột xác định khóa
-   `Chính`: `đúng` nếu khóa là khóa chính của bảng; nếu không, `sai`

Xác thực danh sách khóa được chỉ định để đảm bảo rằng không xác định nhiều hơn một khóa chính và tất cả các tên cột khoá đều tồn tại trên loại bảng.


## Examples

### Example #1
Thay thế thông tin khóa trên loại bảng.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType,
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2
Xóa thông tin khóa đã xác định trước đây trên loại bảng.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
