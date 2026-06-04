---
title: Geometry.ToWellKnownText
---

# Geometry.ToWellKnownText


Μεταφράζει μια δομημένη τιμή γεωμετρικού σημείου σε μια αναπαράσταση Well-Known Text (WKT).


## Syntax

```powerquery
Geometry.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Remarks

Μεταφράζει μια δομημένη τιμή γεωμετρικού σημείου σε μια αναπαράσταση Well-Known Text (WKT), όπως ορίζεται από το Open Geospatial Consortium (OGC), καθώς επίσης τη μορφή σειριοποίησης που χρησιμοποιείται από πολλές βάσεις δεδομένων, συμπεριλαμβανομένου του SQL Server.



## Category
Record.Serialization
