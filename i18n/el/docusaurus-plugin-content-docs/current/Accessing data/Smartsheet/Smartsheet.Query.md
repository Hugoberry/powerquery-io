---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Επιστρέφει ένα αποτέλεσμα JSON από το Smartsheet API


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

Πραγματοποιεί μια κλήση στο Smartsheet 2.0 REST API στο καθορισμένο τελικό σημείο και επιστρέφει τα αποτελέσματα ως εγγραφή JSON.


## Examples

### Example #1 
Έλκει δεδομένα από το τελικό σημείο φύλλων Smartsheet API με πρόσθετα καθορισμένα ορίσματα
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Ένας πίνακας με πληροφορίες φύλλων όπως επιστρέφονται από το Smartsheet API
```



