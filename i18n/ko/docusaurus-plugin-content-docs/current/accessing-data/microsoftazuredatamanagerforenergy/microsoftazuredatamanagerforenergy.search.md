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

Microsoft Azure Data Manager for Energy 인스턴스의 레코드에 대한 쿼리


## Examples

### Example #1
쿼리를 충족하는 레코드 수를 포함하는 레코드와 limit 매개 변수에 의해 선택적으로 제한된 레코드 테이블을 반환합니다
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
[Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]이 포함된 탐색 테이블
```



