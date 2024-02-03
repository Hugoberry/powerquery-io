---
title: AzureCostManagement.Contents
---

# AzureCostManagement.Contents



## Syntax

```powerquery
AzureCostManagement.Contents(
    scope as text,
    scopeValue as text,
    numberOfMonths as number,
    optional parameters as record
) as table
```



## Examples

### Example #1 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε συνόψεις δεδομένων μεταξύ 1-5-2017 και 15-6-2017
```powerquery
Αφήστε
          enrollmentNumber = "100",
          optionalParameters = [ numberOfMonth = 1 ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      στο
          αποτέλεσμα
```

Result: 
```powerquery
Η συνάρτηση θα επιστρέψει συνόψεις δεδομένων μεταξύ 1-5-2017 και 15-6-2017
```


### Example #2 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε συνόψεις δεδομένων για τον Απρίλιο του 2017.
```powerquery
Αφήστε
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "-1" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      στο
          αποτέλεσμα
```

Result: 
```powerquery
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-4-2017 και 30-4-2017
```


### Example #3 
Υποθέτοντας ότι σήμερα είναι 15-6-2017, λάβετε συνόψεις δεδομένων από τον Απρίλιο του 2017 έως τώρα.
```powerquery
Αφήστε
          enrollmentNumber = "100",
          optionalParameters = [ startBillingDataWindow = "-2", endBillingDataWindow = "0", dataType = "Summaries" ],
          result = AzureCostManagement.Contents(enrollmentNumber, optionalParameters)
      στο
          αποτέλεσμα
```

Result: 
```powerquery
Η συνάρτηση θα επιστρέψει δεδομένα μεταξύ 1-4-2017 και 15-6-2017
```



