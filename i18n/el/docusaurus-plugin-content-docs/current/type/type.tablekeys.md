---
title: Type.TableKeys
---

# Type.TableKeys


Επιστρέφει την πιθανώς κενή λίστα κλειδιών για τον παρεχόμενο τύπο πίνακα.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Επιστρέφει την πιθανώς κενή λίστα κλειδιών για τον δεδομένο τύπο πίνακα.  
  
Κάθε κλειδί ορίζεται με χρήση μιας εγγραφής στην ακόλουθη μορφή:

-   `Στήλες`: μια λίστα με τα ονόματα των στηλών που ορίζουν το κλειδί
-   `Πρωτεύον`: `true` αν το κλειδί είναι το πρωτεύον κλειδί του πίνακα. διαφορετικά, `false`


## Examples

### Example #1
Επιστροφή των πληροφοριών κλειδιού για έναν τύπο πίνακα.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
