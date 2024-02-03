---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Poskytuje rozšířené funkce dotazů.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Poskytuje rozšířené funkce dotazů.


## Examples

### Example #1 
Pokud je dnes 2017-6-15, získat souhrny dat mezi 2017-5-1 a 2017-6-15
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
Funkce vrátí souhrny dat mezi 2017-5-1 a 2017-6-15
```


### Example #2 
Pokud je dnes 2017-6-15, získat souhrny dat za duben 2017.
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
Funkce vrátí data mezi 2017-4-1 a 2017-4-30
```


### Example #3 
Pokud je dnes 2017-6-15, získat souhrny dat od dubna 2017 do nynějška.
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
Funkce vrátí data mezi 2017-4-1 a 2017-6-15
```


### Example #4 
Pokud je dnes 2017-6-15, získat souhrny dat od posledního prosince do tohoto února 
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
Funkce vrátí data mezi 2016-12-1 a 2017-2-28
```


### Example #5 
Pokud je dnes 2017-6-15, získat poplatky tržiště za posledních 18 měsíců
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
Funkce vrátí data mezi 2015-12-1 a 2017-6-15
```


### Example #6 
Pokud je dnes 2017-6-15, získat podrobné poplatky pro červen 2017 a květen 2017
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
Funkce vrátí data mezi 2017-5-1 a 2017-6-15
```


### Example #7 
Pokud je dnes 2017-07-03, získat podrobné poplatky za červenec 2016
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
Funkce vrátí data mezi 2016-07-01 a 2016-07-31
```


### Example #8 
Pokud je dnes 2017-7-13, získat souhrny zůstatků za uplynulých 10 měsíců plus 13 dní tohoto měsíce
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
Funkce vrátí data mezi 2016-9-1 a 2017-7-13
```



