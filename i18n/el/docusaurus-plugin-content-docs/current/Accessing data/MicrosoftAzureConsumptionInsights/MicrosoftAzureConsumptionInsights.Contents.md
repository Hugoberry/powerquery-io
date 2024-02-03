---
title: MicrosoftAzureConsumptionInsights.Contents
---

# MicrosoftAzureConsumptionInsights.Contents


## Description

Παροχή συναρτήσεων σύνθετων ερωτημάτων.


## Syntax

```powerquery
MicrosoftAzureConsumptionInsights.Contents(
    enrollmentNumber as any,
    optional parameters as record
) as table
```


## Details

Παροχή συναρτήσεων σύνθετων ερωτημάτων.


## Examples

### Example #1 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε συνόψεις δεδομένων μεταξύ 1-5-2017 και 15-6-2017
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
Η συνάρτηση θα επιστρέψει συνόψεις δεδομένων μεταξύ 1-5-2017 και 15-6-2017
```


### Example #2 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε συνόψεις δεδομένων για τον Απρίλιο του 2017.
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
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-4-2017 και 30-4-2017
```


### Example #3 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε συνόψεις δεδομένων από τον Απρίλιο του 2017 έως τώρα.
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
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-4-2017 και 15-6-2017
```


### Example #4 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε συνόψεις δεδομένων από τον προηγούμενο Δεκέμβριο έως αυτόν τον Φεβρουάριο 
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
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-12-2016 και 28-2-2017
```


### Example #5 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε τις χρεώσεις marketplace για τους τελευταίους 18 μήνες
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
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-12-2015 και 15-6-2017
```


### Example #6 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε λεπτομέρειες χρεώσεων για τον Ιούνιο του 2017 και τον Μάιο του 2017
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
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-5-2017 και 15-6-2017
```


### Example #7 
Υποθέτοντας ότι σήμερα είναι 3-7-2017, λάβετε λεπτομέρειες χρεώσεων για τον Ιούλιο του 2016
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
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-7-2016 και 31-7-2016
```


### Example #8 
Υποθέτοντας ότι σήμερα είναι 13-7-2017, λάβετε συνόψεις υπολοίπου για τους προηγούμενους 10 μήνες συν 13 ημέρες από αυτόν το μήνα
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
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-9-2016 και 13-7-2017
```



