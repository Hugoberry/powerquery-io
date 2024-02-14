---
title: Smartsheet.Tables
---

# Smartsheet.Tables


Trả về bảng bao gồm các trang tính, báo cáo, thư mục và không gian làm việc từ API Smartsheet


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Remarks

Trả về bảng lồng nhau bao gồm các trang tính, báo cáo, thư mục và không gian làm việc sẵn có từ API Smartsheet.


## Examples

### Example #1 
Trả về trang tính, thư mục, báo cáo và không gian làm việc có sẵn ở cấp cao nhất của phân cấp Smartsheet
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Bảng bao gồm các thư mục, báo cáo và không gian làm việc từ cấp cao nhất của phân cấp Smartsheet
```



