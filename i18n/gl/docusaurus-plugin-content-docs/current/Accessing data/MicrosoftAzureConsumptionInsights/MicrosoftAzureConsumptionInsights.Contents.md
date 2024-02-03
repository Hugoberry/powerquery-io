---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Fornece funcións de consultas avanzadas.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Fornece funcións de consultas avanzadas.


## Examples

### Example #1 
Supoñendo que hoxe é 15/06/2017, obtén os datos de resumos para os días comprendidos entre o 01/05/2017 e o 15/06/2017
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
A función devolverá datos resumidos de entre o 01/05/2017 e o 15/06/2017
```


### Example #2 
Supoñendo que hoxe é 15/06/2017, obtén os datos de resumos para abril de 2017
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
A función devolverá datos de entre o 01/04/2017 e o 30/04/2017
```


### Example #3 
Supoñendo que hoxe é 15/06/2017, obtén os datos de resumos desde abril de 2017 ata agora
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
A función devolverá datos de entre o 01/04/2017 e o 15/06/2017
```


### Example #4 
Supoñendo que hoxe é 15/06/2017, obtén os datos de resumos desde o decembro pasado ata este febreiro
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
A función devolverá datos de entre o 01/12/2016 e o 28/02/2017
```


### Example #5 
Supoñendo que hoxe é 15/06/2017, obtén os cargos do Marketplace dos últimos 18 meses.
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
A función devolverá datos de entre o 01/12/2015 e o 15/06/2017
```


### Example #6 
Supoñendo que hoxe é 15/06/2017, obtén os cargos detallados para maio e xuño de 2017
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
A función devolverá datos de entre o 01/05/2017 e o 15/06/2017
```


### Example #7 
Supoñendo que hoxe é 03/07/2017, obtéñense os cargos detallados para xullo de 2016.
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
A función devolverá datos de entre o 01/07/2016 e o 31/07/2016.
```


### Example #8 
Supoñendo que hoxe é 13/07/2017, obtén os resumos do balance dos últimos 10 meses máis os 13 días deste mes
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
A función devolverá datos de entre o 01/09/2016 e o 13/07/2017
```



