---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Επιστρέφει μια λίστα ταυτοτήτων που θα δεχτεί η συνθήκη.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Χρησιμοποιώντας το καθορισμένο στοιχείο `identityProvider`, μετατρέπει τη συνθήκη `condition` στη λίστα ταυτοτήτων για την οποία η συνθήκη `condition` θα επέστρεφε `true` σε όλα τα περιβάλλοντα εξουσιοδότησης με το `identityProvider` ως υπηρεσία παροχής ταυτότητας. Εμφανίζεται σφάλμα, αν δεν είναι δυνατή η μετατροπή της συνθήκης `condition` σε μια λίστα ταυτοτήτων, για παράδειγμα, αν η συνθήκη `condition` χρησιμοποιεί άλλα χαρακτηριστικά εκτός από ταυτότητες χρήστη ή ομάδας για τη λήψη απόφασης.

Λάβετε υπόψη ότι η λίστα ταυτοτήτων αντιπροσωπεύει τις ταυτότητες όπως εμφανίζονται στη συνθήκη `condition` και δεν εφαρμόζεται σε αυτές κανονικοποίηση (όπως επέκταση ομάδας).



## Category
Accessing data
