---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Қосымша сұрау функцияларын беріңіз.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Қосымша сұрау функцияларын беріңіз.


## Examples

### Example #1 
Бүгінгі күнді 2017-6-15 деп қабылдап, 2017-5-1 және 2017-6-15 аралығындағы жиынтықтардың деректерін алу
```powerquery

      рұқсат ету    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2017-5-1 және 2017-6-15 аралығындағы жиынтықтардың деректерін қайтарады
```


### Example #2 
Бүгінгі күнді 2017-6-15 деп қабылдап, 2017 жылдың сәуір айы үшін жиынтықтардың деректерін алу.
```powerquery

      рұқсат ету    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2017-4-1 және 2017-4-30 аралығындағы деректерді қайтарады
```


### Example #3 
Бүгінгі күнді 2017-6-15 деп қабылдап, 2017 жылдың сәуір айынан бастап қазірге дейінгі жиынтықтардың деректерін алу.
```powerquery

      рұқсат ету    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2017-4-1 және 2017-6-15 аралығындағы деректерді қайтарады
```


### Example #4 
Бүгінгі күнді 2017-6-15 деп қабылдап, өткен желтоқсан айынан осы ақпан айына дейінгі жиынтықтардың деректерін алу 
```powerquery

      рұқсат ету    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2016-12-1 және 2017-2-28 аралығындағы деректерді қайтарады
```


### Example #5 
Бүгінгі күнді 2017-6-15 деп қабылдап, өткен 18 ай үшін Marketplace шығындарын алу
```powerquery

      рұқсат ету    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2015-12-1 және 2017-6-15 аралығындағы деректерді қайтарады
```


### Example #6 
Бүгінгі күнді 2017-6-15 деп қабылдап, 2017 жылдың маусым айы және 2017 жылдың мамыр айы үшін толық шығындарды алу
```powerquery

      рұқсат ету    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2017-5-1 және 2017-6-15 аралығындағы деректерді қайтарады
```


### Example #7 
Бүгінгі күнді 2017-07-03 деп қабылдап, 2016 жылдың шілде айы үшін толық шығындарды алу
```powerquery

      рұқсат ету 
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2016-07-01 және 2016-07-31 аралығындағы деректерді қайтарады
```


### Example #8 
Бүгінгі күнді 2017-7-13 деп қабылдап, өткен 10 ай мен осы айдың 13 күні үшін баланстық жиынтықтарды алу
```powerquery

      рұқсат ету  
          enrollmentNumber = "100",
          optionalParameters = [ dataType = "Summaries", numberOfMonth = 10 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      
          нәтиже
    
```

Result: 
```powerquery
Функция 2016-9-1 және 2017-7-13 аралығындағы деректерді қайтарады
```



