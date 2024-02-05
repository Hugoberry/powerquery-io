---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Ange avancerade frågefunktioner.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Ange avancerade frågefunktioner.


## Examples

### Example #1 
Om vi antar att idag är 2017-06-15, hämta sammanfattningsdata mellan 2017-05-01 till 2017-06-15
```powerquery

      låt    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          resultat = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen kommer att returnera sammanfattningsdata mellan 2017-05-01 och 2017-06-15
```


### Example #2 
Om vi antar att idag är 2017-06-15, hämta sammanfattningsdata för april 2017.
```powerquery

      låt    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          resultat = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen kommer att returnera data mellan 2017-04-01 och 2017-04-30
```


### Example #3 
Om vi antar att idag är 2017-06-15, hämta sammanfattningsdata från april 2017 fram tills nu.
```powerquery

      låt    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Sammanfattningar" ],
          resultat = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen kommer att returnera data mellan 2017-04-01 och 2017-06-15
```


### Example #4 
Om vi antar att idag är 2017-06-15, hämta sammanfattningsdata från sista december till denna februari 
```powerquery

      låt    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Sammanfattningar" ],
          resultat = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen kommer att returnera data mellan 2016-12-01 och 2017-02-28
```


### Example #5 
Om vi antar att idag är 2017-06-15, hämta marketplace-debiteringar för de senaste 18 månaderna
```powerquery

      låt    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          result = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen kommer att returnera data mellan 2015-12-01 och 2017-06-15
```


### Example #6 
Om vi antar att idag är 2017-06-15, hämta detaljerade avgifter för juni 2017 och maj 2017
```powerquery

      låt    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          resultat = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen kommer att returnera data mellan 2017-05-01 och 2017-06-15
```


### Example #7 
Om vi antar att idag är 2017-07-03, så hämta detaljerade avgifter för juli 2016
```powerquery

      låt  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          resultat = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      i     
          resultat
    
```

Result: 
```powerquery
Funktionen returnerar data mellan 2016-07-01 och 2016-07-31
```


### Example #8 
Om vi antar att idag är 2017-07-13, hämta balanssammanfattningar för de senaste 10 månaderna plus 13 dagar i denna månad
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
Funktionen kommer att returnera data mellan 2016-09-01 och 2017-07-13
```



