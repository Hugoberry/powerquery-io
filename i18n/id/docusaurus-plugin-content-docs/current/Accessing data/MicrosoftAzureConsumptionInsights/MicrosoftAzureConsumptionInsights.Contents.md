---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Berikan fungsi kueri tingkat lanjut.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Berikan fungsi kueri tingkat lanjut.


## Examples

### Example #1 
Asumsikan hari ini adalah 15-6-2017, dapatkan data ringkasan dari 1-5-2017 hingga 15-6-2017
```powerquery

      biarkan    
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          hasil = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      di     
          hasil
    
```

Result: 
```powerquery
Fungsi akan mengembalikan data ringkasan dari 1-5-2017 hingga 15-6-2017
```


### Example #2 
Asumsikan hari ini adalah 15-6-2017, dapatkan data ringkasan untuk April 2017.
```powerquery

      biarkan    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          hasil = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      di     
          hasil
    
```

Result: 
```powerquery
Fungsi akan mengembalikan data dari 1-4-2017 hingga 30-4-2017
```


### Example #3 
Asumsikan hari ini adalah 15-6-2017, dapatkan data ringkasan dari April 2017 sampai sekarang.
```powerquery

      biarkan    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          hasil = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      di     
          hasil
    
```

Result: 
```powerquery
Fungsi akan mengembalikan data dari 1-4-2017 hingga 15-6-2017
```


### Example #4 
Asumsikan hari ini adalah 15-6-2017, dapatkan data ringkasan dari Desember sampai Februari ini 
```powerquery

      biarkan    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-6", endBillingDataWindow = "-3", dataType = "Summaries" ],
          hasil = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)
      di     
          hasil
    
```

Result: 
```powerquery
Fungsi akan mengembalikan data dari 1-12-2016 hingga 28-2-2017
```


### Example #5 
Asumsikan hari ini adalah 15-6-2017, dapatkan biaya marketplace untuk 18 bulan terakhir
```powerquery

      biarkan    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-18", endBillingDataWindow = "0", dataType = "MarketplaceCharges" ],
          hasil = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      di     
          hasil
    
```

Result: 
```powerquery
Fungsi akan mengembalikan data dari 1-12-2015 hingga 15-6-2017
```


### Example #6 
Asumsikan hari ini adalah 15-6-2017, dapatkan detail biaya untuk Juni dan Mei 2017
```powerquery

      biarkan    
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-1", endBillingDataWindow = "0", dataType = "DetailCharges" ],
          hasil = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
      di     
          hasil
    
```

Result: 
```powerquery
Fungsi akan mengembalikan data dari 1-5-2017 hingga 15-6-2017
```


### Example #7 
Dengan mengasumsikan hari ini adalah 03-07-2017, dapatkan detail biaya untuk Juli 2016
```powerquery

      biarkan  
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-12", endBillingDataWindow = "-11", dataType = "DetailCharges" ],
          hasil = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)    
      di     
          hasil
    
```

Result: 
```powerquery
Fungsi akan menghasilkan data antara 01-07-2016 hingga 31-07-2016
```


### Example #8 
Asumsikan hari ini adalah 13-7-2017, dapatkan ringkasan saldo untuk 10 bulan yang lalu ditambah 13 hari bulan ini
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
Fungsi akan mengembalikan data dari 1-9-2016 hingga 13-7-2017
```



