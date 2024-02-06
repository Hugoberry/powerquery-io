---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


Cung cấp chức năng truy vấn nâng cao.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Remarks

Cung cấp chức năng truy vấn nâng cao.


## Examples

### Example #1 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận dữ liệu tóm tắt từ ngày 1 tháng 5 năm 2017 đến ngày 15 tháng 6 năm 2017
```powerquery

      giả sử    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu tóm tắt từ ngày 1 tháng 5 năm 2017 đến ngày 15 tháng 6 năm 2017
```


### Example #2 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận dữ liệu tóm tắt cho tháng 4 năm 2017.
```powerquery

      giả sử    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ ngày 1 tháng 4 năm 2017 đến ngày 30 tháng 4 năm 2017
```


### Example #3 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận dữ liệu tóm tắt từ tháng 4 năm 2017 cho đến nay.
```powerquery

      giả sử    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ ngày 1 tháng 4 năm 2017 đến ngày 15 tháng 6 năm 2017
```


### Example #4 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận dữ liệu tóm tắt từ tháng 12 trước cho đến tháng 2 này 
```powerquery

      giả sử    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ ngày 1 tháng 12 năm 2016 đến ngày 28 tháng 2 năm 2017
```


### Example #5 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận phí Marketplace cho 18 tháng trước
```powerquery

      giả sử    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ 1 tháng 12 năm 2015 đến ngày 15 tháng 6 năm 2017
```


### Example #6 
Giả sử hôm nay là ngày 15 tháng 6 năm 2017, nhận phí chi tiết cho tháng 5 và tháng 6 năm 2017
```powerquery

      giả sử    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ ngày 1 tháng 5 năm 2017 đến ngày 15 tháng 6 năm 2017
```


### Example #7 
Giả sử hôm nay là ngày 3 tháng 7 năm 2017, nhận phí chi tiết cho tháng 7 năm 2016
```powerquery

      giả sử  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu trong khoảng từ ngày 01 tháng 07 năm 2016 đến ngày 31 tháng 7 năm 2016
```


### Example #8 
Giả sử hôm nay là ngày 13 tháng 7 năm 2017, nhận tóm tắt số dư cho 10 tháng trước cộng với 13 ngày của tháng này
```powerquery

      giả sử  
          enrollmentNumber = "100",
          optionalParameters = [ dataType = "Summaries", numberOfMonth = 10 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      trong     
          kết quả
    
```

Result: 
```powerquery
Hàm sẽ trả về dữ liệu từ ngày 1 tháng 9 năm 2016 đến ngày 13 tháng 7 năm 2017
```



