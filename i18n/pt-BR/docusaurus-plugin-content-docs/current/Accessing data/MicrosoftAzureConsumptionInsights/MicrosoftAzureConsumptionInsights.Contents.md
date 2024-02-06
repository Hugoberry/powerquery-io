---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


Forneça funções de consulta avançada.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Remarks

Forneça funções de consulta avançada.


## Examples

### Example #1 
Supondo que hoje seja 15/6/2017, obter dados de resumos entre 1/5/2017 e 15/6/2017
```powerquery

      permitir    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          resultado = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      no     
          resultado
    
```

Result: 
```powerquery
A função retornará dados de resumos entre 1/5/2017 e 15/6/2017
```


### Example #2 
Supondo que hoje seja 15/6/2017, obter dados de resumos de abril de 2017.
```powerquery

      permitir    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          resultado = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      no     
          resultado
    
```

Result: 
```powerquery
A função retornará dados entre 1/4/2017 e 30/4/2017
```


### Example #3 
Supondo que hoje seja 15/6/2017, obter dados de resumos de abril de 2017 até o momento.
```powerquery

      permitir    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          resultado = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      no     
          resultado
    
```

Result: 
```powerquery
A função retornará dados entre 1/4/2017 e 15/6/2017
```


### Example #4 
Supondo que hoje seja 15/6/2017, obter dados de resumos de dezembro passado até este mês de fevereiro 
```powerquery

      permitir    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          resultado = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      no     
          resultado
    
```

Result: 
```powerquery
A função retornará dados entre 1/12/2016 e 28/2/2017
```


### Example #5 
Supondo que hoje seja 15/6/2017, obter encargos do marketplace para os últimos 18 meses
```powerquery

      permitir    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          resultado = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      no     
          resultado
    
```

Result: 
```powerquery
A função retornará dados entre 1/12/2015 e 15/6/2017
```


### Example #6 
Supondo que hoje seja 15/6/2017, obter encargos detalhados para junho de 2017 e maio de 2017
```powerquery

      permitir    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          resultado = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      no     
          resultado
    
```

Result: 
```powerquery
A função retornará dados entre 1/5/2017 e 15/6/2017
```


### Example #7 
Supondo que hoje seja 03/07/2017, obtenha encargos em detalhes para Julho de 2016
```powerquery

      permitir  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          resultado = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      no     
          resultado
    
```

Result: 
```powerquery
A função retornará dados entre 01/07/2016 e 31/07/2016
```


### Example #8 
Supondo que hoje seja 13/07/2017, obter resumos de saldo para os últimos 10 meses mais 13 dias deste mês
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
A função retornará dados entre 1/9/2016 e 13/7/2017
```



