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

Consulte os registos na instância do Microsoft Azure Data Manager for Energy


## Examples

### Example #1
Devolve um registo que contém a contagem de registos que satisfazem a consulta e uma tabela de registos que foi opcionalmente limitada pelo parâmetro "limit"
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Uma tabela de navegação que contém [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



