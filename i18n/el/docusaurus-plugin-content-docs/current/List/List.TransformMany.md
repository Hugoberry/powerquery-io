---
title: List.TransformMany
---

# List.TransformMany


## Description

Επιστρέφει μια λίστα τα στοιχεία της οποίας μετασχηματίζονται από τη λίστα εισόδου με τη χρήση των καθορισμένων συναρτήσεων.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Επιστρέφει μια λίστα της οποίας τα στοιχεία προβάλλονται από τη λίστα εισόδου..<br />    <br />    Η συνάρτηση <code>collectionTransform</code> μετατρέπει κάθε στοιχείο σε ενδιάμεση λίστα και η συνάρτηση <code>resultTransform</code> λαμβάνει το αρχικό στοιχείο καθώς και ένα στοιχείο από την ενδιάμεση λίστα, προκειμένου να δημιουργηθεί το τελικό αποτέλεσμα.<br />    <br />    Η συνάρτηση <code>collectionTransform</code> έχει την υπογραφή <code>(x ως οποιαδήποτε) ως λίστα => ...</code>, όπου <code>x</code> είναι ένα στοιχείο στο <code>list</code>.    Η συνάρτηση <code>resultTransform</code> προβάλλει το σχήμα του αποτελέσματος και έχει την υπογραφή <code>(x όπως οποιαδήποτε, y όπως οποιαδήποτε) όπως οποιαδήποτε => ...</code>, όπου <code>x</code> είναι ένα στοιχείο στο <code>list</code> και <code>y</code> είναι ένα στοιχείο από τη λίστα που δημιουργείται με τη μεταβίβαση <code>x</code> σε <code>collectionTransform</code>.


## Examples

### Example #1 
Ισοπέδωση μιας λίστας ατόμων και των κατοικίδιων ζώων τους.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
