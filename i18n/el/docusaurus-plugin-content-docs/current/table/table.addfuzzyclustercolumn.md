---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Προσθέτει μια νέα στήλη με αντιπροσωπευτικές τιμές που λαμβάνονται από τιμές ασαφούς ομαδοποίησης της καθορισμένης στήλης στον πίνακα.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Προσθέτει μια νέα στήλη `newColumnName` σε `table` με αντιπροσωπευτικές τιμές `columnName`. Οι αντιπρόσωποι λαμβάνονται με την ασαφή συμφωνία τιμών σε `columnName`, για κάθε γραμμή.

Ένα προαιρετικό σύνολο `options` μπορεί να συμπεριληφθεί για να καθοριστεί ο τρόπος σύγκρισης των στηλών κλειδιού. Οι επιλογές περιλαμβάνουν:

-   `Culture` : Επιτρέπει την ομαδοποίηση εγγραφών με βάση συγκεκριμένους κανόνες κουλτούρας. Μπορεί να είναι οποιοδήποτε έγκυρο όνομα κουλτούρας. Για παράδειγμα, η επιλογή κουλτούρας "ja-JP" ομαδοποιεί εγγραφές βάσει της ιαπωνικής κουλτούρας. Η προεπιλεγμένη τιμή είναι "", με την οποία οι ομάδες βασίζονται στην αμετάβλητη αγγλική κουλτούρα.
-   `IgnoreCase` : Μια λογική τιμή (true/false) που επιτρέπει την ομαδοποίηση κλειδιών χωρίς διάκριση πεζών-κεφαλαίων. Για παράδειγμα, όταν είναι true, η λέξη "Σταφύλια" ομαδοποιείται με τη λέξη "σταφύλια". Η προεπιλεγμένη τιμή είναι true.
-   `IgnoreSpace` : Μια λογική τιμή (true/false) που επιτρέπει τον συνδυασμό τμημάτων κειμένου με σκοπό την εύρεση ομάδων. Για παράδειγμα, όταν είναι true, οι λέξεις "Στα φύλια" ομαδοποιούνται με τη λέξη "Σταφύλια". Η προεπιλεγμένη τιμή είναι true.
-   `SimilarityColumnName` : Ένα όνομα για τη στήλη που εμφανίζει την ομοιότητα μεταξύ μιας τιμής εισόδου και της αντιπροσωπευτικής τιμής για αυτή την είσοδο. Η προεπιλεγμένη τιμή είναι null, στην οποία περίπτωση δεν θα προστεθεί νέα στήλη για ομοιότητες.
-   `Threshold` : Ένας αριθμός μεταξύ 0,00 και 1,00 που καθορίζει τη βαθμολογία ομοιότητας στην οποία θα ομαδοποιηθούν δύο τιμές. Για παράδειγμα, το "Grapes" και το "Graes" (λείπει το "p") ομαδοποιούνται μόνο αν αυτή η επιλογή έχει οριστεί σε λιγότερο από 0,90. Ένα όριο 1,00 επιτρέπει μόνο ακριβείς αντιστοιχίσεις. (Σημειώστε ότι ένα ασαφές "ακριβές ταίριασμα" μπορεί να αγνοήσει διαφορές όπως το περίβλημα, η σειρά λέξεων και τα σημεία στίξης.) Η προεπιλεγμένη τιμή είναι 0,80.
-   `TransformationTable` : Ένας πίνακας που επιτρέπει την ομαδοποίηση εγγραφών βάσει προσαρμοσμένων αντιστοιχίσεων τιμών. Θα πρέπει να περιέχει στήλες "από" και "προς". Για παράδειγμα, Η λέξη "Σταφύλια" ομαδοποιείται με τη λέξη "Σταφίδες" αν έχει παρασχεθεί πίνακας μετασχηματισμού με τη λέξη "Σταφύλια" στη στήλη "από" και τη λέξη "Σταφίδες" στη στήλη "προς". Λάβετε υπόψη ότι ο μετασχηματισμός θα εφαρμοστεί σε όλες τις εμφανίσεις του κειμένου στον πίνακα μετασχηματισμού. Με τον παραπάνω πίνακα μετασχηματισμού, η φράση "θέλω σταφύλια" θα ομαδοποιηθεί επίσης με τη φράση "θέλω σταφίδες".


## Examples

### Example #1
Εύρεση αντιπροσωπευτικών τιμών για την τοποθεσία των υπαλλήλων.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
