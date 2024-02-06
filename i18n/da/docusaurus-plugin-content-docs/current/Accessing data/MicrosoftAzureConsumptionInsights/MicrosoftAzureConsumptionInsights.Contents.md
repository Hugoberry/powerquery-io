---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


Levér avancerede forespørgselsfunktioner.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Remarks

Levér avancerede forespørgselsfunktioner.


## Examples

### Example #1 
Idet det antages, at dags dato er 15-6-2017, hent oversigtsdata fra 1-5-2017 til 15-6-2017
```powerquery

      Lad    
          enrollmentNumber = "100"
          optionalParameters = [numberOfMonth = 1],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)   
      i     
          resultatet
    
```

Result: 
```powerquery
Funktionen returnerer oversigtsdata fra 1-5-2017 til 15-6-2017
```


### Example #2 
Idet det antages, at dags dato er 15-6-2017, hent oversigtsdata for april 2017.
```powerquery

      Lad    
          enrollmentNumber = "100"
          optionalParameters = [startBillingDataWindow = "-2", endBillingDataWindow = "-1"],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters) i resultatet   
      i     
          resultatet
    
```

Result: 
```powerquery
Funktionen returnerer data mellem 1-4-2017 og 30-4-2017
```


### Example #3 
Idet det antages, at dags dato er 15-6-2017, hent oversigtsdata fra april 2017 til nu.
```powerquery

      let    
          enrollmentNumber = "100"
          optionalParameters = [startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Sammendrag"],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)   
      i     
          resultatet
    
```

Result: 
```powerquery
Funktionen returnerer data mellem 1-4-2017 og 15-6-2017
```


### Example #4 
Idet det antages, at dags dato er 15-6-2017, hent oversigtsdata fra december sidste år til februar dette år
```powerquery

      Lad    
          enrollmentNumber = "100"
          optionalParameters = [startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Sammendrag"],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)
      i     
          resultatet
    
```

Result: 
```powerquery
Funktionen returnerer data mellem 1-12-2016 og 28-2-2017
```


### Example #5 
Idet det antages, at dags dato er 15-6-2017, hent marketplace-gebyrer for de seneste 18 måneder
```powerquery

      Lad    
          enrollmentNumber = "100"
          optionalParameters = [startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges"],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)   
      i     
          resultatet
    
```

Result: 
```powerquery
Funktionen returnerer data mellem 1-12-2015 og 15-6-2017
```


### Example #6 
Idet det antages, at dags dato er 15-6-2017, hent detailgebyrer for juni 2017 og maj 2017
```powerquery

      Lad    
          enrollmentNumber = "100"
          optionalParameters = [startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges"],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)   
      i     
          resultatet
    
```

Result: 
```powerquery
Funktionen returnerer data mellem 1-5-2017 og 15-6-2017
```


### Example #7 
Idet det antages, at dags dato er 3-7-2017, hentes detailgebyrer for juli 2016
```powerquery

      Lad  
          enrollmentNumber = "100"
          optionalParameters = [startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges"],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)    
      i     
          resultatet
    
```

Result: 
```powerquery
Funktionen returnerer data mellem 1-7-2016 og 31-7-2016
```


### Example #8 
Idet det antages, at dags dato er 13-7-2017, hent saldooversigter for de seneste 10 måneder plus 13 dage i denne måned
```powerquery

      lad  
          enrollmentNumber = "100",
          optionalParameters = [dataType = "Summaries", numberOfMonth = 10],
          result = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)    
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen returnerer data mellem 1-9-2016 og 13-7-2017
```



