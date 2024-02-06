---
title: Html.Table
---

# Html.Table


Trả về một bảng chứa kết quả chạy bộ chọn CSS được chỉ định dựa trên HTML được cung cấp.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Trả về bảng có chứa các kết quả chạy bộ chọn CSS đã chỉ định so với <code>html</code> đã cho. Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau đây:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Trả về một bảng từ giá trị văn bản html mẫu.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Trình quản lý</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#bảng({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Trích xuất tất cả hrefs từ giá trị văn bản html mẫu.
```powerquery
Html.Table("<a href=""/test.html"">Kiểm tra</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Đang truy cập vào dữ liệu
