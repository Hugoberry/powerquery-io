---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

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


## Details

Προσθέτει μια νέα στήλη <code>newColumnName</code> σε <code>table</code> με αντιπροσωπευτικές τιμές <code>columnName</code>. Οι αντιπρόσωποι λαμβάνονται με την ασαφή συμφωνία τιμών σε <code>columnName</code>, για κάθε γραμμή.    Ένα προαιρετικό σύνολο <code>options</code> μπορεί να συμπεριληφθεί για να καθοριστεί ο τρόπος σύγκρισης των στηλών κλειδιού. Οι επιλογές περιλαμβάνουν:     <ul><li><code>Culture</code> : Επιτρέπει την ομαδοποίηση εγγραφών με βάση συγκεκριμένους κανόνες κουλτούρας. Μπορεί να είναι οποιοδήποτε έγκυρο όνομα κουλτούρας. Για παράδειγμα, η επιλογή κουλτούρας &quot;ja-JP&quot; ομαδοποιεί εγγραφές βάσει της ιαπωνικής κουλτούρας. Η προεπιλεγμένη τιμή είναι &quot;&quot;, με την οποία οι ομάδες βασίζονται στην αμετάβλητη αγγλική κουλτούρα.</li><li><code>IgnoreCase</code> : Μια λογική τιμή (true/false) που επιτρέπει την ομαδοποίηση κλειδιών χωρίς διάκριση πεζών-κεφαλαίων. Για παράδειγμα, όταν είναι true, η λέξη &quot;Σταφύλια&quot; ομαδοποιείται με τη λέξη &quot;σταφύλια&quot;. Η προεπιλεγμένη τιμή είναι true.</li><li><code>IgnoreSpace</code> : Μια λογική τιμή (true/false) που επιτρέπει τον συνδυασμό τμημάτων κειμένου με σκοπό την εύρεση ομάδων. Για παράδειγμα, όταν είναι true, οι λέξεις &quot;Στα φύλια&quot; ομαδοποιούνται με τη λέξη &quot;Σταφύλια&quot;. Η προεπιλεγμένη τιμή είναι true.</li><li><code>SimilarityColumnName</code> : Ένα όνομα για τη στήλη που εμφανίζει την ομοιότητα μεταξύ μιας τιμής εισόδου και της αντιπροσωπευτικής τιμής για αυτή την είσοδο. Η προεπιλεγμένη τιμή είναι null, στην οποία περίπτωση δεν θα προστεθεί νέα στήλη για ομοιότητες.</li><li><code>Threshold</code> : Ένας αριθμός μεταξύ 0,00 και 1,00 που καθορίζει τη βαθμολογία ομοιότητας στην οποία θα ομαδοποιηθούν δύο τιμές.    Για παράδειγμα, το &quot;Grapes&quot; και το &quot;Graes&quot; (λείπει το &quot;p&quot;) ομαδοποιούνται μόνο αν αυτή η επιλογή έχει οριστεί σε λιγότερο από 0,90.    Ένα όριο 1,00 επιτρέπει μόνο ακριβείς αντιστοιχίσεις.    (Σημειώστε ότι ένα ασαφές &quot;ακριβές ταίριασμα&quot; μπορεί να αγνοήσει διαφορές όπως το περίβλημα, η σειρά λέξεων και τα σημεία στίξης.)    Η προεπιλεγμένη τιμή είναι 0,80.</li><li><code>TransformationTable</code> : Ένας πίνακας που επιτρέπει την ομαδοποίηση εγγραφών βάσει προσαρμοσμένων αντιστοιχίσεων τιμών. Θα πρέπει να περιέχει στήλες &quot;από&quot; και &quot;προς&quot;. Για παράδειγμα, Η λέξη &quot;Σταφύλια&quot; ομαδοποιείται με τη λέξη &quot;Σταφίδες&quot; αν έχει παρασχεθεί πίνακας μετασχηματισμού με τη λέξη &quot;Σταφύλια&quot; στη στήλη &quot;από&quot; και τη λέξη &quot;Σταφίδες&quot; στη στήλη &quot;προς&quot;. Λάβετε υπόψη ότι ο μετασχηματισμός θα εφαρμοστεί σε όλες τις εμφανίσεις του κειμένου στον πίνακα μετασχηματισμού. Με τον παραπάνω πίνακα μετασχηματισμού, η φράση &quot;θέλω σταφύλια&quot; θα ομαδοποιηθεί επίσης με τη φράση &quot;θέλω σταφίδες&quot;.</li></ul><br />    


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
