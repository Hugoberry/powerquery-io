---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Proporciona funciones avanzadas para las consultas.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Proporciona funciones avanzadas para las consultas.


## Examples

### Example #1 
Suponiendo que hoy es 15/06/2017, obtiene los datos de los resúmenes correspondientes al período comprendido entre el 01/05/2017 y el 15/06/2017.
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
La función devolverá los datos de los resúmenes correspondientes al periodo comprendido entre el 01/05/2017 y el 15/06/2017.
```


### Example #2 
Suponiendo que hoy es 15/06/2017, obtiene los datos de los resúmenes correspondientes a abril de 2017.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/04/2017 y el 30/04/2017.
```


### Example #3 
Suponiendo que hoy es 15/06/2017, obtiene los datos de los resúmenes correspondientes al periodo comprendido entre abril de 2017 hasta ahora.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/04/2017 y el 15/06/2017.
```


### Example #4 
Suponiendo que hoy es 15/06/2017, obtiene los datos de los resúmenes correspondientes al periodo entre el diciembre pasado y febrero.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/12/2016 y el 28/02/2017.
```


### Example #5 
Suponiendo que hoy es 15/06/2017, obtiene los cargos de Marketplace correspondientes a los últimos 18 meses.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/12/2015 y el 15/06/2017.
```


### Example #6 
Suponiendo que hoy es 15/06/2017, obtiene los cargos detallados correspondientes a mayo y junio de 2017.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/05/2017 y el 15/06/2017.
```


### Example #7 
Suponiendo que hoy es 03/07/2017, se obtienen los cargos detallados para julio de 2016.
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
La función devolverá datos de entre el 01/07/2016 y el 31/07/2016.
```


### Example #8 
Suponiendo que hoy es 13/07/2017, obtiene los resúmenes de los balances correspondientes a los últimos 10 meses, incluidos los 13 días del mes en curso.
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
La función devolverá los datos correspondientes al periodo comprendido entre el 01/09/2016 y el 13/07/2017.
```



