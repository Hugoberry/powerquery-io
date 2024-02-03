---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Εισαγάγετε τη διεύθυνση URL του τελικού σημείου του Azure Enterprise REST API που σχετίζεται με την εγγραφή σας


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Επιστρέφει μια λίστα αναφορών και μηνών διαθέσιμων από το Azure Enterprise API


## Examples

### Example #1 
Χρήση της συνάρτησης AzureEnterprise.Tables και περιήγηση σε μια συγκεκριμένη τιμή για τη λήψη των αποτελεσμάτων.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Περιεχόμενα
```

Result: 
```powerquery
Πίνακας
```



