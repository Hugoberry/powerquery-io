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

Az energiapéldány Microsoft Azure Data Manager-rekordjainak lekérdezése


## Examples

### Example #1
Egy olyan rekordot ad vissza, amely a lekérdezésnek megfelelő rekordok számát tartalmazza, valamint egy rekordtáblát, amelyet a korlátparaméter opcionálisan korlátoz
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
A következőt tartalmazó navigációs tábla: [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



