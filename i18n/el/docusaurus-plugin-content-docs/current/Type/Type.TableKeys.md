---
title: Type.TableKeys
---

# Type.TableKeys


## Description

Επιστρέφει την πιθανώς κενή λίστα κλειδιών για τον παρεχόμενο τύπο πίνακα.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

Επιστρέφει την πιθανώς κενή λίστα κλειδιών για τον δεδομένο τύπο πίνακα.<br />    <br />    Κάθε κλειδί ορίζεται με χρήση μιας εγγραφής στην ακόλουθη μορφή:    <ul>      <li>        <code>Στήλες</code>: μια λίστα με τα ονόματα των στηλών που ορίζουν το κλειδί      </li>      <li>        <code>Πρωτεύον</code>: <code>true</code> αν το κλειδί είναι το πρωτεύον κλειδί του πίνακα. διαφορετικά, <code>false</code>      </li>    </ul>    


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
