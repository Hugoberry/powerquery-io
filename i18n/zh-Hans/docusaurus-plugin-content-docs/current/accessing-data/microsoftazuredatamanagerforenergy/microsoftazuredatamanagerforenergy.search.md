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

对面向能源的 Microsoft Azure 数据管理器实例中记录的查询


## Examples

### Example #1
返回了一条记录，其中包含满足查询的记录计数，以及已由限制参数选择性限制的记录表
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
包含 [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})] 的导航表
```



