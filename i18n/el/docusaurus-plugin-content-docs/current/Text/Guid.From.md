---
title: Guid.From
---

# Guid.From


## Description

Επιστρέφει μια τιμή GUID από τη δεδομένη τιμή.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Επιστρέφει μια τιμή <code>Guid.Type</code> από το δεδομένο <code>value</code>. Αν το δεδομένο <code>value</code> είναι <code>null</code>, το <code>Guid.From</code> επιστρέφει <code>null</code>. Θα γίνει έλεγχος για να διαπιστωθεί αν το δεδομένο <code>value</code> είναι σε αποδεκτή μορφή. Αποδεκτές μορφές που παρέχονται στα παραδείγματα.


## Examples

### Example #1 
Το GUID μπορεί να παρέχεται ως 32 συνεχόμενα δεκαεξαδικά ψηφία.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Το GUID μπορεί να παρέχεται ως 32 δεκαεξαδικά ψηφία που διαχωρίζονται με ενωτικά σε μπλοκ των 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Το GUID μπορεί να παρέχεται ως 32 δεκαεξαδικά ψηφία που διαχωρίζονται με ενωτικά και περικλείονται σε άγκιστρα.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Το GUID μπορεί να παρέχεται ως 32 δεκαεξαδικά ψηφία που διαχωρίζονται με ενωτικά και περικλείονται σε παρενθέσεις.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
