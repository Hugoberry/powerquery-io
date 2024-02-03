---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Δημιουργεί μια εγγραφή που αναπαριστά ένα γεωμετρικό σημείο από συστατικά μέρη.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

Δημιουργεί μια εγγραφή που αναπαριστά ένα γεωγραφικό σημείο από τα συστατικά μέρη του, όπως συντεταγμένη X, συντεταγμένη Y και, αν υπάρχει, συντεταγμένη Z και μέτρηση (M). Ένα προαιρετικό αναγνωριστικό παραπομπής χωρικών δεδομένων (SRID) μπορεί να παρασχεθεί αν διαφέρει από την προεπιλεγμένη τιμή (0).



## Category
Record.Serialization
