---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Hiermit werden erweiterte Abfragefunktionen bereitgestellt.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Hiermit werden erweiterte Abfragefunktionen bereitgestellt.


## Examples

### Example #1 
Wenn heute der 15. Juni 2017 ist, dann werden zusammenfassende Daten für den Zeitraum zwischen dem 1. Mai 2017 und dem 15. Juni 2017 abgerufen.
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
Die Funktion gibt zusammenfassende Daten für den Zeitraum zwischen dem 1. Mai 2017 und dem 15. Juni 2017 zurück.
```


### Example #2 
Wenn heute der 15. Juni 2017 ist, dann werden zusammenfassende Daten für April 2017 abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. April 2017 und dem 30. April 2017 zurück.
```


### Example #3 
Wenn heute der 15. Juni 2017 ist, dann werden zusammenfassende Daten für den Zeitraum von April 2017 bis heute abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. April 2017 und dem 15. Juni 2017 zurück.
```


### Example #4 
Wenn heute der 15. Juni 2017 ist, dann werden zusammenfassende Daten für den Zeitraum von Dezember 2016 bis Februar 2017 abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. Dezember 2016 und dem 28. Februar 2017 zurück.
```


### Example #5 
Wenn heute der 15. Juni 2017 ist, dann werden die Marketplace-Gebühren für die letzten 18 Monate abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. Dezember 2015 und dem 15. Juni 2017 zurück.
```


### Example #6 
Wenn heute der 15. Juni 2017 ist, dann werden detaillierte Gebühreninformationen für Juni 2017 und Mai 2017 abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. Mai 2017 und dem 15. Juni 2017 zurück.
```


### Example #7 
Angenommen, heute wäre der 3. Juli 2017. In diesem Fall würden detaillierte Gebühreninformationen für Juli 2016 abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. Juli 2016 und dem 31. Juli 2016 zurück.
```


### Example #8 
Wenn heute der 13. Juni 2017 ist, dann wird eine Saldozusammenfassung für die letzten 10 Monate plus 13 Tage für diesen Monat abgerufen.
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
Die Funktion gibt Daten für den Zeitraum zwischen dem 1. September 2016 und dem 13. Juli 2017 zurück.
```



