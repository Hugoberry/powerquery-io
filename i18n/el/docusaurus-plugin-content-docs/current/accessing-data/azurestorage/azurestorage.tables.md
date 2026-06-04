---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Επιστρέφει έναν πίνακα περιήγησης που περιέχει τους πίνακες που βρέθηκαν στον καθορισμένο λογαριασμό από έναν θάλαμο χώρου αποθήκευσης του Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Returns a navigational table containing a row for each table found at the account URL, `account`, from an Azure storage vault. Each row contains a link to the azure table. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Timeout` : Μια διάρκεια που ελέγχει για πόσο χρονικό διάστημα θα γίνει αναμονή πριν από την εγκατάλειψη της αίτησης στον διακομιστή. Η προεπιλεγμένη τιμή εξαρτάται από την προέλευση.



## Category
Accessing data
