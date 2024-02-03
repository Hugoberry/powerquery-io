---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Geavanceerde queryfuncties opgeven.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Geavanceerde queryfuncties opgeven.


## Examples

### Example #1 
Ervan uitgaande dat het vandaag 15-6-2017 is, samenvattingen van gegevens ophalen van 1-5-2017 tot en met 15-6-2017
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
De functie geeft als resultaat een samenvatting van de gegevens tussen 1-5-2017 en 15-6-2017
```


### Example #2 
Ervan uitgaande dat het vandaag 15-6-2017 is, samenvattingen van gegevens ophalen voor april 2017.
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
De functie geeft als resultaat de gegevens tussen 1-4-2017 en 30-4-2017
```


### Example #3 
Ervan uitgaande dat het vandaag 15-6-2017 is, samenvattingen van gegevens ophalen vanaf april 2017 tot nu.
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
De functie geeft als resultaat de gegevens tussen 1-4-2017 en 15-6-2017
```


### Example #4 
Ervan uitgaande dat het vandaag 15-6-2017 is, samenvattingen van gegevens ophalen van afgelopen december tot februari dit jaar 
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
De functie geeft als resultaat de gegevens tussen 1-12-2016 en 28-2-2017
```


### Example #5 
Ervan uitgaande dat het vandaag 15-6-2017 is, marketplace-kosten ophalen voor de afgelopen achttien maanden
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
De functie geeft als resultaat de gegevens van de periode tussen 1-12-2015 en 15-6-2017
```


### Example #6 
Ervan uitgaande dat het vandaag 15-6-2017 is, gedetailleerde kosten ophalen voor juni 2017 en 2017 en mei 2017
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
De functie geeft als resultaat de gegevens tussen 1-5-2017 en 15-6-2017
```


### Example #7 
Ervan uitgaande dat het vandaag 03-07-2017 is, gedetailleerde kosten ophalen voor juli 2016
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
De functie geeft als resultaat de gegevens tussen 01-07-2016 en 31-07-2016
```


### Example #8 
Ervan uitgaande dat het vandaag 13-7-2017 is, saldosamenvattingen ophalen voor de afgelopen 10 maanden en 13 dagen van deze maand
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
De functie geeft als resultaat de gegevens van de periode tussen 1-9-2016 en 13-7-2017
```



