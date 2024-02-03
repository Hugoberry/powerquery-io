---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Επιστρέφει την τετραγωνική ρίζα του αριθμού.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Επιστρέφει την τετραγωνική ρίζα του <code>number</code>.    Εάν το <code>number</code> είναι null, η <code>Number.Sqrt</code> επιστρέφει την τιμή null. Εάν είναι αρνητική τιμή, επιστρέφεται η <code>Number.NaN</code> (Δεν είναι αριθμός).


## Examples

### Example #1 
Βρείτε την τετραγωνική ρίζα του 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Βρείτε την τετραγωνική ρίζα του 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
