---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Poskytuje rozšírené funkcie dotazu.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Poskytuje rozšírené funkcie dotazu.


## Examples

### Example #1 
Načíta údaje o súhrnoch medzi 1. 5. 2017 a 15. 6. 2017 za predpokladu, že dnes je 15. 6. 2017
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
Funkcia vráti údaje o súhrnoch medzi 1. 5. 2017 a 15. 6. 2017
```


### Example #2 
Načíta údaje o súhrnoch z apríla 2017 za predpokladu, že dnes je 15. 6. 2017.
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
Funkcia vráti údaje medzi 1. 4. 2017 a 30. 4. 2017
```


### Example #3 
Načíta údaje o súhrnoch od apríla 2017 až po dnešok za predpokladu, že dnes je 15. 6. 2017.
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
Funkcia vráti údaje medzi 1. 4. 2017 a 15. 6. 2017
```


### Example #4 
Načíta údaje o súhrnoch od decembra predchádzajúceho roku až po február tohto roku za predpokladu, že dnes je 15. 6. 2017 
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
Funkcia vráti údaje medzi 1. 12. 2016 a 28. 2. 2017
```


### Example #5 
Načíta poplatky na Marketplace za posledných 18 mesiacov za predpokladu, že dnes je 15. 6. 2017
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
Funkcia vráti údaje medzi 1. 12. 2015 a 15. 6. 2017
```


### Example #6 
Načíta podrobné poplatky za máj 2017 a jún 2017 za predpokladu, že dnes je 15. 6. 2017
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
Funkcia vráti údaje medzi 1. 5. 2017 a 15. 6. 2017
```


### Example #7 
Načíta podrobné poplatky za júl 2016 za predpokladu, že dnes je 03.07.2017
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
Funkcia vráti údaje medzi 01.07.2016 a 31.07.2016
```


### Example #8 
Načíta súhrny zostatkov za posledných 10 mesiacov a 13 dní z tohto mesiaca za predpokladu, že dnes je 13. 7. 2017
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
Funkcia vráti údaje medzi 1. 9. 2016 a 13. 7. 2017
```



