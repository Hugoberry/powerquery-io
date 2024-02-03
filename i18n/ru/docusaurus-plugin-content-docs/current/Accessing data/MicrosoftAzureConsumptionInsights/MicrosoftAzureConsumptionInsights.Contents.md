---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Укажите расширенные функции запросов.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Укажите расширенные функции запросов.


## Examples

### Example #1 
Предположив, что сегодня 15.06.2017, получить данные сводок между датами 01.05.2017 и 15.06.2017
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные сводок с 01.05.2017 по 15.06.2017
```


### Example #2 
Предположив, что сегодня 15.06.2017, получить данные сводок за апрель 2017 г.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные с 01.04.2017 по 30.04.2017
```


### Example #3 
Предположив, что сегодня 15.06.2017, получить данные сводок с апреля 2017 г. по настоящее время.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные с 01.04.2017 по 15.06.2017
```


### Example #4 
Предположив, что сегодня 15.06.2017, получить данные сводок с декабря прошлого года до февраля этого года 
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные с 01.12.2016 по 28.02.2017
```


### Example #5 
Предположив, что сегодня 15.06.2017, получить расходы в Marketplace за последние 18 месяцев
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные с 01.12.2015 по 15.06.2017
```


### Example #6 
Предположив, что сегодня 15.06.2017, получить подробные расходы за июнь и май 2017 г.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные с 01.05.2017 по 15.06.2017
```


### Example #7 
Предполагая, что сегодня 03.07.2017, получить подробные расходы за июль 2016 г.
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные с 01.07.2016 по 31.07.2016
```


### Example #8 
Предположив, что сегодня 13.07.2017, получить сводки по сальдо за последние 10 месяцев и 13 дней текущего месяца
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ dataType = "Summaries", numberOfMonth = 10 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
Функция вернет данные с 01.09.2016 по 13.07.2017
```



