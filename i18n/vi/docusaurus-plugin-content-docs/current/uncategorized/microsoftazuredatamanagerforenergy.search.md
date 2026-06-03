---
title: MicrosoftAzureDataManagerForEnergy.Search
---

# MicrosoftAzureDataManagerForEnergy.Search



## Syntax

```powerquery
MicrosoftAzureDataManagerForEnergy.Search(
    serviceName as text,
    dataPartition as text,
    kind as text,
    query as text,
    optional limit as number,
    optional returnedFields as text
) as table
```


## Remarks

Truy vấn các bản ghi trong phiên bản này của Trình quản lý dữ liệu Microsoft Azure dành cho năng lượng


## Examples

### Example #1
Trả về một bản ghi chứa số lượng bản ghi thỏa mãn truy vấn và một bảng gồm các bản ghi được giới hạn tùy ý bằng tham số giới hạn
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Bảng điều hướng chứa [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



