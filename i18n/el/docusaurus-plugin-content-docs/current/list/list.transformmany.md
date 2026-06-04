---
title: List.TransformMany
---

# List.TransformMany


Επιστρέφει μια λίστα τα στοιχεία της οποίας μετασχηματίζονται από τη λίστα εισόδου με τη χρήση των καθορισμένων συναρτήσεων.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Επιστρέφει μια λίστα της οποίας τα στοιχεία προβάλλονται από τη λίστα εισόδου..  
  
Η συνάρτηση `collectionTransform` μετατρέπει κάθε στοιχείο σε ενδιάμεση λίστα και η συνάρτηση `resultTransform` λαμβάνει το αρχικό στοιχείο καθώς και ένα στοιχείο από την ενδιάμεση λίστα, προκειμένου να δημιουργηθεί το τελικό αποτέλεσμα.  
  
Η συνάρτηση `collectionTransform` έχει την υπογραφή `(x ως οποιαδήποτε) ως λίστα => ...`, όπου `x` είναι ένα στοιχείο στο `list`. Η συνάρτηση `resultTransform` προβάλλει το σχήμα του αποτελέσματος και έχει την υπογραφή `(x όπως οποιαδήποτε, y όπως οποιαδήποτε) όπως οποιαδήποτε => ...`, όπου `x` είναι ένα στοιχείο στο `list` και `y` είναι ένα στοιχείο από τη λίστα που δημιουργείται με τη μεταβίβαση `x` σε `collectionTransform`.


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
