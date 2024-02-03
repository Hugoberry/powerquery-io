---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Speciális lekérdezési funkciókat biztosítanak.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Speciális lekérdezési funkciókat biztosítanak.


## Examples

### Example #1 
Ha a mai dátum 2017. 6. 15., lekéri a 2017. 5. 1. és 2017. 6. 15. közötti adatok összesítését
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
A függvény a 2017. 5. 1. és 2017. 6. 15. közötti összefoglaló adatokat adja vissza
```


### Example #2 
Ha a mai dátum 2017. 6. 15., a 2017. áprilisi összefoglaló adatokat kéri le.
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
A függvény a 2017. 4. 1. és 2017. 4. 30. közötti adatokat adja vissza
```


### Example #3 
Ha a mai dátum 2017. 6. 15., a 2017. áprilistól a mai napig tartó összefoglaló adatokat kéri le.
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
A függvény a 2017. 4. 1. és 2017. 6. 15. közötti adatokat adja vissza
```


### Example #4 
Ha a mai dátum 2017. 6. 15., a múlt decembertől a mai napig tartó összefoglaló adatokat kéri le 
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
A függvény a 2016. 12. 1. és 2017. 2. 28 közötti adatokat adja vissza
```


### Example #5 
Ha a mai dátum 2017. 6. 15., az elmúlt 18 havi piactéri díjakat kéri le
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
A függvény a 2015. 12. 1. és 2017. 6. 15. közötti adatokat adja vissza
```


### Example #6 
Ha a mai dátum 2017. 6. 15., a 2017. júniusi és 2017. májusi részletes díjakat kéri le
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
A függvény a 2017. 5. 1. és 2017. 6. 15. közötti adatokat adja vissza
```


### Example #7 
Ha a mai dátum 2017. 07. 03., a 2016. júliusi részletes díjakat kéri le
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
A függvény a 2016. 07. 01. és 2016. 07. 31. közötti adatokat adja vissza
```


### Example #8 
Ha a mai dátum 2017. 7. 13., az elmúlt 10 hónap és a folyó hónap 13 napjának egyenlegösszesítéseit kéri le
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
A függvény a 2016. 9. 1. és 2017. 7. 13. közötti adatokat adja vissza
```



