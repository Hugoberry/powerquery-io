---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Επιστρέφει έναν νέο τύπο πίνακα όπου όλα τα κλειδιά έχουν αντικατασταθεί με την καθορισμένη λίστα κλειδιών.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Επιστρέφει έναν νέο τύπο πίνακα με όλα τα κλειδιά να αντικαθίστανται από την καθορισμένη λίστα κλειδιών.<br />    <br />    Κάθε κλειδί ορίζεται με χρήση μιας εγγραφής στην ακόλουθη μορφή:    <ul>      <li>        <code>Στήλες</code>: μια λίστα με τα ονόματα των στηλών που ορίζουν το κλειδί      </li>      <li>        <code>Πρωτεύον</code>: <code>true</code> αν το κλειδί είναι το πρωτεύον κλειδί του πίνακα. διαφορετικά, <code>false</code>      </li>    </ul>    Η καθορισμένη λίστα κλειδιών επικυρώνεται για να διασφαλιστεί ότι δεν έχουν οριστεί περισσότερα από ένα πρωτεύοντα κλειδιά και ότι όλα τα ονόματα στηλών κλειδιών υπάρχουν στον τύπο πίνακα.    


## Examples

### Example #1 
Αντικαταστήστε τις πληροφορίες κλειδιού σε έναν τύπο πίνακα.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
Απαλοιφή των πληροφοριών κλειδιού που έχουν οριστεί προηγουμένως σε έναν τύπο πίνακα.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
