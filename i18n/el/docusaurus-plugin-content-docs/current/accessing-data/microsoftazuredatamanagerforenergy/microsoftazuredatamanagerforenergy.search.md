---
title: MicrosoftAzureDataManagerForEnergy.Search
---

# MicrosoftAzureDataManagerForEnergy.Search



## Syntax

```powerquery
MicrosoftAzureDataManagerForEnergy.Search(
    serviceName as text,
    dataPartition as text,
    kind as text,
    query as text,
    optional limit as number,
    optional returnedFields as text
) as table
```


## Remarks

Ερωτήματα για εγγραφές στο παράδειγμα Διαχείριση δεδομένων Microsoft Azure για ενέργεια


## Examples

### Example #1
Επιστρέφει μια εγγραφή που περιέχει τον αριθμό των εγγραφών που ικανοποιούν το ερώτημα και έναν πίνακα εγγραφών που περιορίζεται προαιρετικά από την παράμετρο ορίου
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Ένας πίνακας πλοήγησης που περιέχει [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



