---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Udostępnij zaawansowane funkcje zapytań.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Udostępnij zaawansowane funkcje zapytań.


## Examples

### Example #1 
Zakładając, że bieżąca data to 2017-06-15, pobierz dane podsumowań z okresu od 2017-05-01 do 2017-06-15
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
Funkcja zwróci dane podsumowań z okresu od 2017-05-01 do 2017-06-15
```


### Example #2 
Zakładając, że bieżąca data to 2017-06-15, pobierz dane podsumowań z kwietnia 2017 r.
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
Funkcja zwróci dane z okresu od 2017-04-01 do 2017-04-30
```


### Example #3 
Zakładając, że bieżąca data to 2017-06-15, pobierz dane podsumowań z okresu od kwietnia 2017 r. do chwili obecnej.
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
Funkcja zwróci dane z okresu od 2017-04-01 do 2017-06-15
```


### Example #4 
Zakładając, że bieżąca data to 2017-06-15, pobierz dane podsumowań z okresu od grudnia ubiegłego roku do lutego bieżącego roku
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
Funkcja zwróci dane z okresu od 2016-12-01 do 2017-02-28
```


### Example #5 
Zakładając, że bieżąca data to 2017-06-15, pobierz opłaty za witrynę Marketplace za ostatnie 18 miesięcy
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
Funkcja zwróci dane z okresu od 2015-12-01 do 2017-06-15
```


### Example #6 
Zakładając, że bieżąca data to 2017-06-15, pobierz szczegóły opłat za czerwiec i maj 2017 r.
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
Funkcja zwróci dane z okresu od 2017-05-01 do 2017-06-15
```


### Example #7 
Zakładając, że bieżąca data to 2017-07-03, pobierz szczegóły opłat za lipiec 2016 r.
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
Funkcja zwróci dane z okresu od 2016-07-01 do 2016-07-31
```


### Example #8 
Zakładając, że bieżąca data to 2017-07-13, pobierz podsumowania salda z ostatnich 10 miesięcy oraz 13 dni obecnego miesiąca
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
Funkcja zwróci dane z okresu od 2016-09-01 do 2017-07-13
```



