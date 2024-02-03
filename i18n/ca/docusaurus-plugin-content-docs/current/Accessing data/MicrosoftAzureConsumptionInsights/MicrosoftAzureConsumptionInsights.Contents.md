---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Permet proporcionar funcions avançades per a les consultes.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Permet proporcionar funcions avançades per a les consultes.


## Examples

### Example #1 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran les dades resumides corresponents al període entre l&#39;1 de maig del 2017 i el 15 de juny del 2017.
```powerquery

      permeteu    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      al     
          resultat
    
```

Result: 
```powerquery
La funció retornarà els resums corresponents al període entre l'1 de maig del 2017 i el 15 de juny del 2017.
```


### Example #2 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran les dades resumides corresponents a l&#39;abril del 2017.
```powerquery

      permeteu    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      al     
          resultat
    
```

Result: 
```powerquery
La funció retornarà les dades corresponents al període entre l'1 d'abril del 2017 i el 30 d'abril del 2017.
```


### Example #3 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran les dades resumides corresponents al període entre l&#39;abril del 2017 fins ara.
```powerquery

      permeteu    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      al     
          resultat
    
```

Result: 
```powerquery
La funció retornarà les dades corresponents al període entre l'1 d'abril del 2017 i el 15 de juny del 2017.
```


### Example #4 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran les dades resumides corresponents al període entre el desembre passat i aquest mes de febrer.
```powerquery

      permeteu    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      al     
          resultat
    
```

Result: 
```powerquery
La funció retornarà les dades corresponents al període entre l'1 de desembre del 2016 i el 28 de febrer del 2017.
```


### Example #5 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran els càrrecs del Marketplace dels darrers 18 mesos.
```powerquery

      permeteu    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      al     
          resultat
    
```

Result: 
```powerquery
La funció retornarà les dades corresponents al període entre l'1 de desembre del 2015 i el 15 de juny del 2017.
```


### Example #6 
Suposant que avui sigui 15 de juny del 2017, s&#39;obtindran els càrrecs detallats corresponents al maig i al juny del 2017.
```powerquery

      permeteu    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      al     
          resultat
    
```

Result: 
```powerquery
La funció retornarà les dades corresponents al període entre l'1 de maig del 2017 i el 15 de juny del 2017.
```


### Example #7 
Suposant que avui sigui 3 de juliol del 2017, s&#39;obtindran els càrrecs detallats corresponents al juliol del 2016.
```powerquery

      permeteu  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      al     
          resultat
    
```

Result: 
```powerquery
La funció retornarà les dades corresponents al període entre l'1 de juliol del 2016 i el 31 de juliol del 2016.
```


### Example #8 
Suposant que avui sigui 13 de juliol del 2017, s&#39;obtindran els resums del saldo corresponents als últims 10 mesos, inclosos els 13 dies del mes actual.
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
La funció retornarà les dades corresponents al període entre l'1 de setembre del 2016 i el 13 de juliol del 2017.
```



