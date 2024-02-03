---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Δημιουργεί μια εγγραφή που αναπαριστά ένα γεωγραφικό σημείο από συστατικά μέρη.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

Δημιουργεί μια εγγραφή που αναπαριστά ένα γεωγραφικό σημείο από τα συστατικά μέρη του, όπως γεωγραφικό μήκος, γεωγραφικό πλάτος και, αν υπάρχει, ανύψωση (Z) και μέτρηση (M). Ένα προαιρετικό αναγνωριστικό παραπομπής χωρικών δεδομένων (SRID) μπορεί να παρασχεθεί αν διαφέρει από την προεπιλεγμένη τιμή (4326).



## Category
Record.Serialization
