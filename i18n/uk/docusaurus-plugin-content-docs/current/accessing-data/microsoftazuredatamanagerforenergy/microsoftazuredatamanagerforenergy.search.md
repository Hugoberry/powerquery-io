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

Запити на записи в екземплярі Диспетчера даних Microsoft Azure для енергетики


## Examples

### Example #1
Повертає запис, який містить кількість записів, що відповідають запиту, і таблицю записів, яку додатково обмежено за допомогою параметра обмеження
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Таблиця навігації, що містить [кількість = 4947, записи = #table({""Records""}, {{[...]}, {[...]}})]
```



