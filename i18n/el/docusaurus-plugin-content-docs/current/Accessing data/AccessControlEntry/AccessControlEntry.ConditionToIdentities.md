---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Επιστρέφει μια λίστα ταυτοτήτων που θα δεχτεί η συνθήκη.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Χρησιμοποιώντας το καθορισμένο στοιχείο <code>identityProvider</code>, μετατρέπει τη συνθήκη <code>condition</code> στη λίστα ταυτοτήτων για την οποία η συνθήκη <code>condition</code> θα επέστρεφε <code>true</code> σε όλα τα περιβάλλοντα εξουσιοδότησης με το <code>identityProvider</code> ως υπηρεσία παροχής ταυτότητας. Εμφανίζεται σφάλμα, αν δεν είναι δυνατή η μετατροπή της συνθήκης <code>condition</code> σε μια λίστα ταυτοτήτων, για παράδειγμα, αν η συνθήκη <code>condition</code> χρησιμοποιεί άλλα χαρακτηριστικά εκτός από ταυτότητες χρήστη ή ομάδας για τη λήψη απόφασης.<br />    Λάβετε υπόψη ότι η λίστα ταυτοτήτων αντιπροσωπεύει τις ταυτότητες όπως εμφανίζονται στη συνθήκη <code>condition</code> και δεν εφαρμόζεται σε αυτές κανονικοποίηση (όπως επέκταση ομάδας).<br />



## Category
Accessing data
