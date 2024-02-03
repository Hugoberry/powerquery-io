---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Berikan fungsi pertanyaan lanjutan.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Berikan fungsi pertanyaan lanjutan.


## Examples

### Example #1 
Katakan hari ini ialah 2017-6-15, dapatkan data ringkasan antara 2017-5-1 hingga 2017-6-15
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
Fungsi akan mengembalikan data antara 2017-5-1 hingga 2017-6-15
```


### Example #2 
Katakan hari ini ialah 2017-6-15, dapatkan data ringkasan untuk April 2017.
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
Fungsi akan mengembalikan data antara 2017-4-1 dan 2017-4-30
```


### Example #3 
Katakan hari ini ialah 2017-6-15, dapatkan data ringkasan dari April 2017 hingga sekarang.
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
Fungsi akan mengembalikan data antara 2017-4-1 dan 2017-6-15
```


### Example #4 
Katakan hari ini ialah 2017-6-15, dapatkan data ringkasan dari Disember lalu hingga Februari ini 
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
Fungsi akan mengembalikan data antara 2016-12-1 dan 2017-2-28
```


### Example #5 
Katakan hari ini ialah 2017-6-15, dapatkan caj marketplace untuk 18 bulan lalu
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
Fungsi akan mengembalikan data antara 2015-12-1 dan 2017-6-15
```


### Example #6 
Katakan hari ini ialah 2017-6-15, dapatkan caj butiran untuk Jun 2017 dan Mei 2017
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
Fungsi akan mengembalikan data antara 2017-5-1 dan 2017-6-15
```


### Example #7 
Katakanlah hari ini ialah 03-07-2017, dapatkan caj butiran untuk Julai 2016
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
Fungsi akan mengembalikan data antara 01-07-2016 dan 31-07-2016
```


### Example #8 
Katakan hari ini ialah 2017-7-13, dapatkan ringkasan baki untuk 10 bulan lalu termasuk 13 hari bulan ini
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
Fungsi akan mengembalikan data antara 2016-9-1 dan 2017-7-13
```



