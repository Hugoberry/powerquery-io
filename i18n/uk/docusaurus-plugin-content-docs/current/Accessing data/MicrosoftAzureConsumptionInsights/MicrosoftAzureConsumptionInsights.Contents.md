---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Надати функції розширеного запиту.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Надати функції розширеного запиту.


## Examples

### Example #1 
Припускаючи, що сьогодні 15.06.2017, отримати дані зведень за період від 01.05.2017 до 15.06.2017.
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
Функція повертає дані зведень за період від 01.05.2017 до 15.06.2017.
```


### Example #2 
Припускаючи, що сьогодні 15.06.2017, отримати дані зведень за квітень 2017 р.
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
Функція повертає дані за період від 01.04.2017 до 30.04.2017.
```


### Example #3 
Припускаючи, що сьогодні 15.06.2017, отримати дані зведень за період від квітня 2017 р. до цього часу.
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
Функція повертає дані за період від 01.04.2017 до 15.06.2017.
```


### Example #4 
Припускаючи, що сьогодні 15.06.2017, отримати дані зведень за період від минулого грудня до лютого цього року. 
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
Функція повертає дані за період від 01.12.2016 до 28.02.2017.
```


### Example #5 
Припускаючи, що сьогодні 15.06.2017, отримати дані про ринкові збори за останні 18 місяців.
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
Функція повертає дані за період від 01.12.2015 до 15.06.2017.
```


### Example #6 
Припускаючи, що сьогодні 15.06.2017, отримати докладні дані про збори за червень 2017 р. й травень 2017 р.
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
Функція повертає дані за період від 01.05.2017 до 15.06.2017.
```


### Example #7 
Припускаючи, що сьогодні 03.07.2017, отримати докладні дані про збори за липень 2016 р.
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
Функція поверне дані за період від 01.07.2016 до 31.07.2016.
```


### Example #8 
Припускаючи, що сьогодні 13.07.2017, отримати зведення балансу за останні 10 місяців плюс 13 днів у цьому місяці.
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
Функція повертає дані за період від 01.09.2016 до 13.07.2017.
```



