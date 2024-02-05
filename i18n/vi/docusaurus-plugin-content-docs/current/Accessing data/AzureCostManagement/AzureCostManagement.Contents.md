---
title: AzureCostManagement.Contents
---

# AzureCostManagement.Contents



## Syntax

```powerquery
AzureCostManagement.Contents(
    scope as text,
    scopeValue as text,
    numberOfMonths as number,
    optional parameters as record
) as table
```



## Examples

### Example #1 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận dữ liệu tóm tắt từ ngày 1 tháng 5 năm 2017 đến ngày 15 tháng 6 năm 2017
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          result
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu tóm tắt từ ngày 1 tháng 5 năm 2017 đến ngày 15 tháng 6 năm 2017
```


### Example #2 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận dữ liệu tóm tắt cho tháng 4 năm 2017.
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          result
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ ngày 1 tháng 4 năm 2017 đến ngày 30 tháng 4 năm 2017
```


### Example #3 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận dữ liệu tóm tắt từ tháng 4 năm 2017 cho đến nay.
```powerquery
let
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      in
          result
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ ngày 1 tháng 4 năm 2017 đến ngày 15 tháng 6 năm 2017
```



