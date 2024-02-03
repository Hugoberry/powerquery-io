---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Gelişmiş sorgu işlevleri sağlayın.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Gelişmiş sorgu işlevleri sağlayın.


## Examples

### Example #1 
Bugünün 2017-6-15 olduğu varsayılırsa, 2017-5-1 ile 2017-6-15 arasındaki özet verilerini alın
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
İşlev 2017-5-1 ile 2017-6-15 arasındaki özet verilerini döndürür
```


### Example #2 
Bugünün 2017-6-15 olduğu varsayılırsa, Nisan 2017&#39;ye ait özet verilerini alın.
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
İşlev 2017-4-1 ile 2017-4-30 arasındaki verileri döndürür
```


### Example #3 
Bugünün 2017-6-15 olduğu varsayılırsa, Nisan 2017&#39;den şimdiye kadar olan özet verilerini alın.
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
İşlev 2017-4-1 ile 2017-6-15 arasındaki verileri döndürür
```


### Example #4 
Bugünün 2017-6-15 olduğu varsayılırsa, geçen Aralık ayı ile bu Şubat ayı arasındaki özet verilerini alın 
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
İşlev 2016-12-1 ile 2017-2-28 arasındaki verileri döndürür
```


### Example #5 
Bugünün 2017-6-15 olduğu varsayılırsa, son 18 aya ait market ücretlerini alın
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
İşlev 2015-12-1-ile 2017-6-15 arasındaki verileri döndürür
```


### Example #6 
Bugünün 2017-6-15 olduğu varsayılırsa, Haziran 2017 ve Mayıs 2017&#39;ye ait ayrıntılı ücretleri alın
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
İşlev 2017-5-1 ile 2017-6-15 arasındaki verileri döndürür
```


### Example #7 
Bugünün 03.07.2017 olduğu varsayılırsa, Temmuz 2016&#39;ya ait ayrıntılı ücretleri alırsınız
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
İşlev, 01.07.2016 ve 31.07.2016 arasındaki verileri döndürür
```


### Example #8 
Bugünün 2017-7-13 olduğu varsayılırsa, geçen 10 ay artı bu aya ait 13 gün için bakiye özetlerini alın
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
İşlev 2016-9-1 ile 2017-7-13 arasındaki verileri döndürür
```



