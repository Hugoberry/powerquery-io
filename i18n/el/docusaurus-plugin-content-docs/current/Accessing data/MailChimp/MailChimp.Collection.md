---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

Επιστρέφει έναν πίνακα με δεδομένα από ένα τελικό σημείο MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

Πραγματοποιεί μια κλήση προς το MailChimp API και επιστρέφει το σύνολο δεδομένων που προκύπτει ως πίνακα. Ανατρέχει αυτόματα σε όλες τις σελίδες αποτελεσμάτων. Είναι δυνατή η χρήση της προαιρετικής παραμέτρου entityName για τελικά σημεία API όπου το τελικό σημείο ρίζας και το κύριο entityName στην απόκριση JSON δεν συμφωνούν.


## Examples

### Example #1 
Έλκει έναν πίνακα δεδομένων από το τελικό σημείο lists του MailChimp API.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
Ένας πίνακας με δεδομένα λιστών.
```


### Example #2 
Έλκει έναν πίνακα δεδομένων από το τελικό σημείο campaign-folders του MailChimp API.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
Ένας πίνακας με δεδομένα campaign-folders.
```



