---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

Επιστρέφει έναν πίνακα με δεδομένα από ένα τελικό σημείο ευρετηρίου Smartsheet.


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

Πραγματοποιεί μια κλήση στο Smartsheet 2.0 REST API στο καθορισμένο τελικό σημείο και μετασχηματίζει το στοιχείο δεδομένων που επιστρέφεται σε πίνακα.


## Examples

### Example #1 
Έλκει έναν πίνακα με πληροφορίες χρηστών από το Smartsheet API
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
Ένας πίνακας με πληροφορίες χρηστών όπως επιστρέφονται από το Smartsheet API
```



