---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Επιστρέφει έναν πίνακα με περιεχόμενο αναφοράς από το Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Πραγματοποιεί μια κλήση στο δεδομένο τελικό σημείο αναφορών Webtrends και επιστρέφει όλα τα δεδομένα ως πίνακα.


## Examples

### Example #1 
Πραγματοποιεί μια κλήση στο τελικό σημείο αναφοράς επισκεπτών Webtrends για δεδομένα στις τελευταίες 30 ημέρες
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Ένας πίνακας με δεδομένα επισκεπτών
```



