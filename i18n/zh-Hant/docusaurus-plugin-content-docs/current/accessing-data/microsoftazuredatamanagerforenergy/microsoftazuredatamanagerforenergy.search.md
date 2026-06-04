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

適用於能源的 Microsoft Azure 資料管理員執行個體中的查詢記錄


## Examples

### Example #1
傳回包含符合查詢的記錄計數的記錄，以及選擇性受到限制參數限制的記錄表格
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
包含 [計數 = 4947，記錄 = #table({""Records""}, {{[...]}, {[...]}})] 的瀏覽表格
```



