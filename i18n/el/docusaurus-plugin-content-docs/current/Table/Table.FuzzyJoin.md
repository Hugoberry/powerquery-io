---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Ενώνει τις γραμμές των δύο πινάκων ασαφούς συμφωνίας με βάση τα δεδομένα κλειδιά.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

Συνδέει τις γραμμές του <code>table1</code> με τις γραμμές του <code>table2</code> με βάση τη σύγκριση ασαφούς συμφωνίας των τιμών των στηλών κλειδιού που επιλέγονται κατά <code>key1</code> (για το <code>table1</code>) και κατά <code>key2</code> (για το <code>table2</code>).<br />Η ασαφής συμφωνία είναι μια σύγκριση με βάση τη ομοιότητα του κειμένου αντί για την ισότητα του κειμένου.<br />Από προεπιλογή, εκτελείται εσωτερικός σύνδεσμος, ωστόσο μπορεί να συμπεριληφθεί μια προαιρετική επιλογή <code>joinKind</code>, για να καθορίσει τον τύπο του συνδέσμου. Στις επιλογές περιλαμβάνονται οι εξής:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Μπορεί να συμπεριληφθεί ένα προαιρετικό σύνολο <code>joinOptions</code> το οποίο θα καθορίζει τον τρόπο σύγκρισης των στηλών κλειδιού. Στις επιλογές περιλαμβάνονται:    <ul><li><code>ConcurrentRequests</code> : Ένας αριθμός μεταξύ 1 και 8 ο οποίος καθορίζει τον αριθμό των παράλληλων νημάτων που θα χρησιμοποιηθούν για ασαφή συμφωνία. Η προεπιλεγμένη τιμή είναι 1.</li><li><code>Culture</code> : Επιτρέπει την αντιστοίχιση εγγραφών με βάση συγκεκριμένους κανόνες κουλτούρας. Μπορεί να είναι οποιοδήποτε έγκυρο όνομα κουλτούρας. Για παράδειγμα, η επιλογή κουλτούρας του &quot;ja-JP&quot; αντιστοιχίζει τις εγγραφές με βάση την ιαπωνική κουλτούρα. Η προεπιλεγμένη τιμή είναι &quot;&quot;, με την οποία γίνεται αντιστοίχιση με βάση την αμετάβλητη αγγλική κουλτούρα.</li><li><code>IgnoreCase</code> : Μια λογική τιμή (true/false) που επιτρέπει την αντιστοίχιση κλειδιών χωρίς διάκριση πεζών-κεφαλαίων. Για παράδειγμα, όταν είναι true, η λέξη &quot;Σταφύλια&quot; αντιστοιχίζεται με τη λέξη &quot;σταφύλια&quot;. Η προεπιλεγμένη τιμή είναι true.</li><li><code>IgnoreSpace</code> : Μια λογική τιμή (true/false) που επιτρέπει τον συνδυασμό τμημάτων κειμένου με σκοπό την εύρεση αντιστοιχιών. Για παράδειγμα, όταν είναι true, οι λέξεις &quot;Στα φύλια&quot; αντιστοιχίζονται με τη λέξη &quot;Σταφύλια&quot;. Η προεπιλεγμένη τιμή είναι true.</li><li><code>NumberOfMatches</code> : Ένας ακέραιος αριθμός που καθορίζει τον μέγιστο αριθμό αντιστοιχισμένων γραμμών που μπορούν να επιστραφούν για κάθε γραμμή εισόδου. Για παράδειγμα, η τιμή 1 θα επιστρέψει έως μία αντιστοιχισμένη γραμμή για κάθε γραμμή εισόδου. Αν δεν παρασχεθεί αυτή η επιλογή, επιστρέφονται όλες οι αντιστοιχισμένες γραμμές.</li><li><code>SimilarityColumnName</code> : Ένα όνομα για τη στήλη που εμφανίζει την ομοιότητα μεταξύ μιας τιμής εισόδου και της αντιπροσωπευτικής τιμής για αυτή την είσοδο. Η προεπιλεγμένη τιμή είναι null, στην οποία περίπτωση δεν θα προστεθεί νέα στήλη για ομοιότητες.</li><li><code>Threshold</code> : Ένας αριθμός μεταξύ 0,00 και 1,00 που καθορίζει τη βαθμολογία ομοιότητας με την οποία θα αντιστοιχιστούν δύο τιμές.    Για παράδειγμα, το &quot;Grapes&quot; και το &quot;Graes&quot; (λείπει το &quot;p&quot;) συμφωνούν μόνο αν αυτή η επιλογή έχει οριστεί σε λιγότερο από 0,90.    Ένα όριο 1,00 επιτρέπει μόνο ακριβείς αντιστοιχίσεις. (Σημειώστε ότι ένα ασαφές &quot;ακριβές ταίριασμα&quot; μπορεί να αγνοήσει διαφορές όπως το περίβλημα, η σειρά λέξεων και τα σημεία στίξης.)    Η προεπιλεγμένη τιμή είναι 0,80.</li><li><code>TransformationTable</code> : Ένας πίνακας που επιτρέπει την αντιστοίχιση εγγραφών βάσει προσαρμοσμένων αντιστοιχίσεων τιμών. Θα πρέπει να περιέχει στήλες &quot;από&quot; και &quot;προς&quot;. Για παράδειγμα, Η λέξη &quot;Σταφύλια&quot; αντιστοιχίζεται με τη λέξη &quot;Σταφίδες&quot; αν έχει παρασχεθεί πίνακας μετασχηματισμού με τη λέξη &quot;Σταφύλια&quot; στη στήλη &quot;από&quot; και τη λέξη &quot;Σταφίδες&quot; στη στήλη &quot;προς&quot;. Λάβετε υπόψη ότι ο μετασχηματισμός θα εφαρμοστεί σε όλες τις εμφανίσεις του κειμένου στον πίνακα μετασχηματισμού. Με τον παραπάνω πίνακα μετασχηματισμού, η φράση &quot;θέλω σταφύλια&quot; θα αντιστοιχιστεί επίσης με τη φράση &quot;θέλω σταφίδες&quot;.</li></ul><br />    


## Examples

### Example #1 
Αριστερός εσωτερικός ασαφής σύνδεσμος δύο πινάκων με βάση το [FirstName]
```powerquery
Table.FuzzyJoin(
	  Table.FromRecords(
        {
		        [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
		        [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
	      },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
	  {"FirstName1"},
	  Table.FromRecords(
        {
		        [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
		        [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
	      },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
	  {"FirstName2"},
	  JoinKind.LeftOuter,
	  [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
			  CustomerID = 1,
			  FirstName1 = "Bob",
			  Phone = "555-1234",
			  CustomerStateID = 1,
			  FirstName2 = "Bob",
			  State = "TX"
		],
    [
			  CustomerID = 1,
			  FirstName1 = "Bob",
			  Phone = "555-1234",
			  CustomerStateID = 2,
			  FirstName2 = "bOB",
			  State = "CA"
		],
    [
			  CustomerID = 2,
			  FirstName1 = "Robert",
			  Phone = "555-4567",
			  CustomerStateID = null,
			  FirstName2 = null,
			  State = null
		]
})
```




## Category
Table.Transformation
