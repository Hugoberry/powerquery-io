---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Zagotavlja napredne funkcije poizvedbe.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Zagotavlja napredne funkcije poizvedbe.


## Examples

### Example #1 
Denimo, da je danes 15. 6. 2017 ter da želite pridobiti podatke povzetkov med 1. 5. 2017 in 15. 6. 2017
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
Funkcija vrne podatke povzetkov med 1. 5. 2017- in 15. 6. 2017
```


### Example #2 
Denimo, da je danes 15. 6. 2017 in da želite pridobiti podatke povzetkov za april 2017.
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
Funkcija vrne podatke med 1. 4. 2017 in 30. 4. 2017
```


### Example #3 
Denimo, da je danes 15. 6. 2017 in da želite pridobiti podatke povzetkov od aprila 2017 do današnjega dne.
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Povzetki" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Funkcija vrne podatke med 1. 4. 2017 in 15. 6. 2017
```


### Example #4 
Denimo, da je danes je 15. 6. 2017 in da želite pridobiti podatke povzetkov od zadnjega decembra do tega februarja 
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Povzetki" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      in     
          result
    
```

Result: 
```powerquery
Funkcija vrne podatke med 1. 12. 2016 in 28. 2 2017
```


### Example #5 
Denimo, da je danes je 15. 6. 2017 in da želite pridobiti stroške spletnega mesta Marketplace za zadnjih 18 mesecev
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "StroškiTrga" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Funkcija vrne podatke med 1. 12. 2015 in 15. 6. 2017
```


### Example #6 
Denimo, da je danes 15. 6. 2017 ter da želite pridobiti podrobne stroške za junij 2017 in maj 2017
```powerquery

      let    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "PodrobniStroški" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      in     
          result
    
```

Result: 
```powerquery
Funkcija vrne podatke med 1. 5. 2017 in 15. 6. 2017
```


### Example #7 
Denimo, da je danes 3. 7. 2017 in da želite pridobiti podrobne stroške za julij 2016
```powerquery

      let  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "PodrobniStroški" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      in     
          result
    
```

Result: 
```powerquery
Funkcija vrne podatke med 1. 7. 2016 in 31. 7. 2016
```


### Example #8 
Denimo, da je danes 13. 7. 2017 ter da želite pridobiti povzetke stanja za preteklih 10 mesecev in 13 dni tega meseca.
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
Funkcija vrne podatke med 1. 9. 2016 in 13. 7. 2017
```



