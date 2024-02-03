---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Offre funzioni di query avanzate.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Offre funzioni di query avanzate.


## Examples

### Example #1 
Supponendo che oggi sia il 15/06/2017, ottiene i dati dei riepiloghi per il periodo dal 01/05/2017 al 15/06/2017
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
La funzione restituisce i dati dei riepiloghi per il periodo dal 01/05/2017 al 15/06/2017
```


### Example #2 
Supponendo che oggi sia il 15/06/2017, ottiene i dati dei riepiloghi per il mese di aprile 2017
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
La funzione restituisce i dati per il periodo dal 01/04/2017 al 30/04/2017
```


### Example #3 
Supponendo che oggi sia il 15/06/2017, ottiene i dati dei riepiloghi dal mese di aprile 2017 a oggi
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
La funzione restituisce i dati per il periodo dal 01/04/2017 al 15/06/2017
```


### Example #4 
Supponendo che oggi sia il 15/06/2017, ottiene i dati dei riepiloghi dallo scorso dicembre a febbraio 
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
La funzione restituisce i dati per il periodo dal 01/12/2016 al 28/02/2017
```


### Example #5 
Supponendo che oggi sia il 15/06/2017, ottiene gli addebiti di Marketplace per gli ultimi 18 mesi
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
La funzione restituisce i dati per il periodo dal 01/12/2015 al 15/06/2017
```


### Example #6 
Supponendo che oggi sia il 15/06/2017, ottiene gli addebiti dettagliati per i mesi di giugno 2017 e maggio 2017
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
La funzione restituisce i dati per il periodo dal 01/05/2017 al 15/06/2017
```


### Example #7 
Supponendo che oggi sia il 03/07/2017, ottiene gli addebiti dettagliati per il mese di luglio 2016
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
La funzione restituisce i dati per il periodo dal 1/7/16 al 31/7/16
```


### Example #8 
Supponendo che oggi sia il 13/07/2017, ottiene i riepiloghi del saldo per gli ultimi dieci mesi più 13 giorni di questo mese
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
La funzione restituisce i dati per il periodo dal 01/09/2016 al 13/07/2017
```



