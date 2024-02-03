---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Anna lisäkyselyfunktiot.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Anna lisäkyselyfunktiot.


## Examples

### Example #1 
Olettaen, että tänään on 2017-6-15, hae yhteenvetotiedot välillä 2017-5-1 ja 2017-6-15
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
Funktio palauttaa yhteenvetotiedot välillä 2017-5-1 ja 2017-6-15
```


### Example #2 
Olettaen, että tänään on 2017-6-15, hae yhteenvetotiedot huhtikuulle 2017.
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
Funktio palauttaa tiedot välillä 2017-4-1 ja 2017-4-30
```


### Example #3 
Olettaen, että tänään on 2017-6-15, hae yhteenvetotiedot huhtikuusta 2017 tähän hetkeen.
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
Funktio palauttaa tiedot välillä 2017-4-1 ja 2017-6-15
```


### Example #4 
Olettaen, että tänään on 2017-6-15, hae yhteenvetotiedot viime joulukuusta tämän vuoden helmikuuhun 
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
Funktio palauttaa tiedot välillä 2016-12-1 ja 2017-2-28
```


### Example #5 
Olettaen, että tänään on 2017-6-15, hae viimeisen 18 kuukauden Marketplace-veloitukset
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
Funktio palauttaa tiedot välillä 2015-12-1 ja 2017-6-15
```


### Example #6 
Olettaen, että tänään on 2017-6-15, hae kesäkuun 2017 ja toukokuun 2017 yksityiskohtaiset veloitukset
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
Funktio palauttaa tiedot välillä 2017-5-1 ja 2017-6-15
```


### Example #7 
Olettaen, että tänään on 2017-07-03, hae yksityiskohtaiset veloitukset heinäkuulle 2016
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
Funktio palauttaa tiedot välillä 2016-07-01 ja 2016-07-31
```


### Example #8 
Olettaen, että tänään on 2017-7-13, hae viimeisten kymmenen kuukauden ja tämän kuun 13 päivän taseyhteenvedot
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
Funktio palauttaa tiedot välillä 2016-9-1 ja 2017-7-13
```



