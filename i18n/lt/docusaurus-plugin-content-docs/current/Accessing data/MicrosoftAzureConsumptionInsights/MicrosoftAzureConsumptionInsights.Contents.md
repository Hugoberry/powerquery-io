---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Suteikia išplėstinės užklausos funkcijas.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Suteikia išplėstinės užklausos funkcijas.


## Examples

### Example #1 
Tariant, kad šiandien yra 2017-06-15, gaunami laikotarpio nuo 2017-05-01 iki 2017-06-15 suvestinių duomenys
```powerquery

      leisti    
          enrollmentNumber = 100,
          optionalParameters = [ numberOfMonth = 1 ],
          rezultatas = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
           
          rezultate
    
```

Result: 
```powerquery
Funkcija pateiks suvestinių duomenis nuo 2017-05-01 iki 2017-06-15
```


### Example #2 
Tariant, kad šiandien yra 2017-06-15, gaunami 2017 m. balandžio mėn. suvestinių duomenys.
```powerquery

      leisti    
          enrollmentNumber = 100,
          optionalParameters = [ startBillingDataWindow = -2, endBillingDataWindow = -1 ],
          rezultatas = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
           
          rezultate
    
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2017-04-01 iki 2017-04-30
```


### Example #3 
Tariant, kad šiandien yra 2017-06-15, gaunami suvestinių duomenys nuo 2017 m. balandžio mėn. iki šiandien.
```powerquery

      leisti    
          enrollmentNumber = 100,
          optionalParameters = [ startBillingDataWindow = -2, endBillingDataWindow = 0, dataType = suvestinės ],
          rezultatas = MicrosoftAzureConsumptionInsights.Contents(enrollmentNumber, optionalParameters)   
           
          rezultate
    
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2017-04-01 iki 2017-06-15
```


### Example #4 
Tariant, kad šiandien yra 2017-06-15, gaunami suvestinių duomenys nuo praėjusių metų gruodžio mėn. iki šių metų vasario mėn. 
```powerquery

      leisti    
          enrollmentNumber = 100,
          optionalParameters = [startBillingDataWindow = -6, endBillingDataWindow = -3, dataType = suvestinės ],
          rezultatas = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)
           
          rezultate
    
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2017-12-01 iki 2016-02-28
```


### Example #5 
Tariant, kad šiandien yra 2017-06-15, gaunami pastarųjų 18 mėnesių parduotuvės mokesčiai
```powerquery

      leisti    
          enrollmentNumber = 100,
          optionalParameters = [startBillingDataWindow = -18, endBillingDataWindow = 0, dataType = MarketplaceCharges],
          rezultatas = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)   
           
          rezultate
    
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2015-12-01 iki 2017-06-15
```


### Example #6 
Tariant, kad šiandien yra 2017-06-15, gaunami išsami 2017 m. birželio ir gegužės mėn. mokesčių informacija
```powerquery

      leisti    
          enrollmentNumber = 100,
          optionalParameters = [startBillingDataWindow = -1, endBillingDataWindow = 0, dataType = DetailCharges],
          rezultatas = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)   
           
          rezultate
    
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2017-05-01 iki 2017-06-15
```


### Example #7 
Tariant, kad šiandien yra 2017-07-03, gaunama išsami 2016 m. liepos mėn. mokesčių informacija
```powerquery

      leisti    
          enrollmentNumber = 100,
          optionalParameters = [startBillingDataWindow = -12, endBillingDataWindow = -11, dataType = DetailCharges],
          rezultatas = MicrosoftAzureConsumptionInsights.Contents (enrollmentNumber, optionalParameters)   
           
          rezultate
    
```

Result: 
```powerquery
Funkcija pateiks duomenis nuo 2016-07-01 iki 2016-07-31
```


### Example #8 
Tariant, kad šiandien yra 2017-07-13, gaunamos paskutinių 10 mėnesių ir 13 šio mėnesio dienų balanso suvestinės
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
Funkcija pateiks duomenis nuo 2016-09-01 iki 2017-07-13
```



