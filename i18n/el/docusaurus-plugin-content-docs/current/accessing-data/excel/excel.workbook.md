---
title: Excel.Workbook
---

# Excel.Workbook


Επιστρέφει τα περιεχόμενα του βιβλίου εργασίας του Excel.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Επιστρέφει τα περιεχόμενα του βιβλίου εργασίας του Excel..

-   `useHeaders` μπορεί να είναι null, μια λογική τιμή (true/false) που υποδεικνύει εάν η πρώτη σειρά κάθε επιστρεφόμενου πίνακα πρέπει να αντιμετωπίζεται ως κεφαλίδα ή ως εγγραφή επιλογών. Προεπιλογή: false.
-   `delayTypes` μπορεί να είναι null ή μια λογική τιμή (true/false) που υποδεικνύει εάν οι στήλες κάθε επιστρεφόμενου πίνακα δεν πρέπει να πληκτρολογηθούν. Προεπιλογή: false.

Αν μια εγγραφή έχει καθοριστεί για `useHeaders` (και `delayTypes` είναι null), ενδέχεται να παρέχονται τα ακόλουθα πεδία εγγραφής:

-   `UseHeaders`: Μπορεί να είναι null ή μια λογική τιμή (true/false) που υποδεικνύει εάν η πρώτη γραμμή κάθε επιστρεφόμενου πίνακα πρέπει να αντιμετωπίζεται ως κεφαλίδα. Προεπιλογή: false.
-   `DelayTypes`: Μπορεί να είναι null ή μια λογική τιμή (true/false) που υποδεικνύει εάν οι στήλες κάθε επιστρεφόμενου πίνακα δεν πρέπει να πληκτρολογηθούν. Προεπιλογή: false.
-   `InferSheetDimensions`: Μπορεί να είναι null ή λογική (true/false) τιμή που υποδεικνύει εάν η περιοχή ενός φύλλου εργασίας που περιέχει δεδομένα πρέπει να συναχθεί με την ανάγνωση του ίδιου του φύλλου εργασίας, αντί να διαβάζετε τα μεταδεδομένα διαστάσεων από το αρχείο. Αυτό μπορεί να είναι χρήσιμο σε περιπτώσεις όπου τα μεταδεδομένα διαστάσεων είναι λανθασμένα. Σημειώστε ότι αυτή η επιλογή υποστηρίζεται μόνο για αρχεία Open XML Excel και όχι για αρχεία Excel παλαιού τύπου. Προεπιλογή: ψευδής.


## Examples

### Example #1
Επιστροφή των περιεχομένων του Φύλλου1 από ένα βιβλίο εργασίας του Excel.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
