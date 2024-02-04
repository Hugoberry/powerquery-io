---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Fornecer funções de consulta avançada.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Fornecer funções de consulta avançada.


## Examples

### Example #1 
Partindo do princípio que hoje é 15-06-2017, obter os resumos de dados entre 01-05-2017 e 15-06-2017
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
A função devolve os dados de resumo entre 01-05-2017 e 15-06-2017
```


### Example #2 
Partindo do princípio que hoje é 15-06-2017, obter os dados de resumo para abril de 2017.
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
A função devolve os dados entre 01-04-2017 e 30-04-2017
```


### Example #3 
Partindo do princípio que hoje é 15-06-2017, obter os dados de resumos de abril de 2017 até ao momento.
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
A função devolve os dados entre 01-04-2017 e 15-06-2017
```


### Example #4 
Partindo do princípio que hoje é 15-06-2017, obter os dados de resumos do último mês de dezembro até este fevereiro
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
A função devolve os dados entre 01-12-2016 e 28-02-2017
```


### Example #5 
Partindo do princípio que hoje é 15-06-2017, obter os encargos do marketplace para os últimos 18 meses
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
A função devolve os dados entre 01-12-2015 e 15-06-2017
```


### Example #6 
Partindo do princípio que hoje é 15-06-2017, obter os encargos detalhados para junho e maio de 2017
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
A função devolve os dados entre 01-05-2017 e 15-06-2017
```


### Example #7 
Partindo do princípio que hoje é 03-07-2017, obter os encargos detalhados de julho de 2016
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
A função devolve os dados entre 01-07-2016 e 31-07-2016
```


### Example #8 
Partindo do princípio que hoje é 13-07-2017, obter os resumos de saldo para os últimos 10 meses e mais 13 dias deste mês
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
A função devolve os dados entre 01-09-2016 e 13-07-2017
```



