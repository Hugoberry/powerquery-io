---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


Fournit des fonctions de requête avancées.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Remarks

Fournit des fonctions de requête avancées.


## Examples

### Example #1 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les données des synthèses entre le 01-05-2017 et le 15-06-2017
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
La fonction retourne les données des synthèses entre le 01-05-2017 et le 15-06-2017
```


### Example #2 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les données des synthèses d&#39;avril 2017.
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
La fonction retourne les données entre le 01-04-2017 et le 30-04-2017
```


### Example #3 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les données des synthèses d&#39;avril 2017 à maintenant.
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
La fonction retourne les données entre le 01-04-2017 et le 15-06-2017
```


### Example #4 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les données des synthèses de décembre dernier à février dernier 
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
La fonction retourne les données entre le 01-12-2016 et le 28-02-2017
```


### Example #5 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient les frais de place de marché des 18 derniers mois
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
La fonction retourne les données entre le 01-12-2015 et le 15-06-2017
```


### Example #6 
En supposant qu’aujourd&#39;hui nous sommes le 15-06-2017, obtient le détail des frais de juin 2017 et mai 2017
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
La fonction retourne les données entre le 01-05-2017 et le 15-06-2017
```


### Example #7 
En supposant qu&#39;aujourd&#39;hui nous sommes le 03-07-2017, obtient le détail des frais de juillet 2016
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
La fonction retourne les données entre le 01-07-2016 et le 31-07-2016
```


### Example #8 
En supposant qu&#39;aujourd&#39;hui nous sommes le 13-07-2017, obtient les synthèses des soldes des 10 derniers mois, plus des 13 jours de ce mois-ci
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
La fonction retourne les données entre le 01-09-2016 et le 13-07-2017
```



