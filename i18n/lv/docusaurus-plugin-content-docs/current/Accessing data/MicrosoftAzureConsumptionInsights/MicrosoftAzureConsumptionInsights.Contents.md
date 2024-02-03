---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Nodrošiniet papildu vaicājumu funkcijas.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Nodrošiniet papildu vaicājumu funkcijas.


## Examples

### Example #1 
Pieņemot, ka šodien ir 15.06.2017, iegūt kopsavilkumu datus starp 01.05.2017 un 15.06.2017
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
Funkcija atgriezīs kopsavilkumu datus no 01.05.2017 līdz 15.06.2017
```


### Example #2 
Pieņemot, ka šodien ir 15.06.2017, iegūt 2017. gada aprīļa kopsavilkumu datus.
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
Funkcija atgriezīs datus starp 01.04.2017 un 30.04.2017
```


### Example #3 
Pieņemot, ka šodien ir 15.06.2017, iegūt kopsavilkumu datus no 2017. gada aprīļa līdz pašreizējam brīdim.
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
Funkcija atgriezīs datus starp 01.04.2017 un 15.06.2017
```


### Example #4 
Pieņemot, ka šodien ir 15.06.2017, iegūt kopsavilkumu datus no pagājušā gada decembra līdz šī gada februārim 
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
Funkcija atgriezīs datus starp 01.12.2016 un 28.02.2017
```


### Example #5 
Pieņemot, ka šodien ir 15.06.2017., iegūt maksas par tiešsaistes tirgu pēdējos 18 mēnešos
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
Funkcija atgriezīs datus starp 01.12.2015 un 15.06.2017
```


### Example #6 
Pieņemot, ka šodien ir 15.06.2017, saņemt detalizētu informāciju par maksām 2017. gada jūnijā un 2017. gada maijā
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
Funkcija atgriezīs datus starp 01.05.2017 un 15.06.2017
```


### Example #7 
Pieņemot, ka šodien ir 03.07.2017., saņemt detalizētu informāciju par maksām 2016. gada jūlijā 
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
Funkcija atgriezīs datus par periodu no 01.07.2016. līdz 31.07.2016.
```


### Example #8 
Pieņemot, ka šodien ir 13.07.2017, saņemt bilances kopsavilkumus par pēdējiem 10 mēnešiem un 13 dienām šajā mēnesī
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
Funkcija atgriezīs datus starp 01.09.2016 un 13.07.2017
```



