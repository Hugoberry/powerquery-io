---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Oferiți funcții avansate de interogare.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Oferiți funcții avansate de interogare.


## Examples

### Example #1 
Presupunând că astăzi este 15.06.2017, obțineți rezumatele de date dintre 1.05.2017 și 15.06.2017
```powerquery

      permiteți    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      în     
          rezultat
    
```

Result: 
```powerquery
Funcția va returna rezumatele de date dintre 1.05.2017 și 15.06.2017
```


### Example #2 
Presupunând că astăzi este 15.06.2017, obțineți rezumatele de date pentru aprilie 2017.
```powerquery

      permiteți    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      în     
          rezultat
    
```

Result: 
```powerquery
Funcția va returna datele dintre 1.04.2017 și 30.04.2017
```


### Example #3 
Presupunând că astăzi este 15.06.2017, obțineți rezumatele de date din aprilie 2017 până acum.
```powerquery

      permiteți    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      în     
          rezultat
    
```

Result: 
```powerquery
Funcția va returna datele dintre 1.04.2017 și 15.06.2017
```


### Example #4 
Presupunând că astăzi este 15.06.2017, obțineți rezumatele de date din decembrie anul trecut până în luna februarie a anului curent 
```powerquery

      permiteți    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      în     
          rezultat
    
```

Result: 
```powerquery
Funcția va returna datele dintre 1.12.2016 și 28.02.2017
```


### Example #5 
Presupunând că astăzi este 15.06.2017, obțineți taxele de piață pentru ultimele 18 luni
```powerquery

      permiteți    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      în     
          rezultat
    
```

Result: 
```powerquery
Funcția va returna datele dintre 1.12.2015 și 15.06.2017
```


### Example #6 
Presupunând că astăzi este 15.06.2017, obțineți taxele detaliate pentru iunie 2017 și mai 2017
```powerquery

      permiteți    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      în     
          rezultat
    
```

Result: 
```powerquery
Funcția va returna datele dintre 1.05.2017 și 15.06.2017
```


### Example #7 
Presupunând că astăzi este 3.07.2017, obțineți taxele detaliate pentru iulie 2016
```powerquery

      permiteți  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      în     
          rezultat
    
```

Result: 
```powerquery
Funcția va returna date dintre 1.07.2016 și 31.07.2016
```


### Example #8 
Presupunând că astăzi este 13.07.2017, obțineți rezumatele de sold pentru ultimele 10 luni, plus 13 zile din această lună
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
Funcția va returna datele dintre 1.09.2016 și 13.07.2017
```



