---
title: Csv.Document
---

# Csv.Document


Επιστρέφει τα περιεχόμενα του εγγράφου CSV ως πίνακα.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Επιστρέφει τα περιεχόμενα του εγγράφου CSV ως πίνακα.

-   Το `columns` μπορεί να είναι null, ο αριθμός των στηλών, μια λίστα ονομάτων στηλών, ένας τύπος πίνακα ή μια εγγραφή επιλογών.
-   Το `delimiter` μπορεί να είναι ένας μεμονωμένος χαρακτήρας, μια λίστα χαρακτήρων ή η τιμή `""`, η οποία υποδεικνύει ότι οι σειρές πρέπει να χωρίζονται κατά διαδοχικούς χαρακτήρες κενού διαστήματος. Προεπιλογή: `","`.
-   Ανατρέξτε στο `ExtraValues.Type` για τις υποστηριζόμενες τιμές του `extraValues`.
-   Το `encoding` καθορίζει τον τύπο κωδικοποίησης κειμένου.

Εάν έχει καθοριστεί μια εγγραφή για `columns` (και `delimiter`, `extraValues`και `encoding` είναι null), ενδέχεται να δοθούν τα ακόλουθα πεδία εγγραφής:

-   `Οριοθέτης`: Οριοθέτης στήλης ενός χαρακτήρα. Προεπιλογή: `","`.
-   `Στήλες`: Μπορεί να είναι null, ο αριθμός των στηλών, μια λίστα ονομάτων στηλών ή ένας τύπος πίνακα. Εάν ο αριθμός των στηλών είναι μικρότερος από τον αριθμό που βρέθηκε στην είσοδο, οι πρόσθετες στήλες θα αγνοηθούν. Εάν ο αριθμός των στηλών είναι μεγαλύτερος από τον αριθμό που βρέθηκε στην είσοδο, οι πρόσθετες στήλες θα είναι null. Όταν δεν καθορίζεται, ο αριθμός των στηλών θα καθορίζεται από οτιδήποτε βρίσκεται στην είσοδο.
-   `Κωδικοποίηση`: Η κωδικοποίηση κειμένου του αρχείου. Προεπιλογή: 65001 (UTF-8).
-   `CsvStyle`: Καθορίζει τον τρόπο χειρισμού των εισαγωγικών.
    -   `CsvStyle.QuoteAfterDelimiter` (προεπιλογή): Τα εισαγωγικά σε ένα πεδίο είναι σημαντικά μόνο αμέσως μετά τον οριοθέτη.
    -   `CsvStyle.QuoteAlways`: Τα εισαγωγικά σε ένα πεδίο είναι πάντα σημαντικά, ανεξάρτητα από το πού εμφανίζονται.
-   `QuoteStyle`: Καθορίζει τον τρόπο χειρισμού των αλλαγών γραμμής σε εισαγωγικά.
    -   `QuoteStyle.Csv` (προεπιλογή): Οι αλλαγές γραμμής σε εισαγωγικά αντιμετωπίζονται ως μέρος των δεδομένων και όχι ως το τέλος της τρέχουσας σειράς.
    -   `QuoteStyle.None`: Όλες οι αλλαγές γραμμής αντιμετωπίζονται ως το τέλος της τρέχουσας σειράς, ακόμα και όταν προκύπτουν μέσα σε μια τιμή σε εισαγωγικά.
-   `IncludeByteOrderMark`: Μια λογική τιμή που υποδεικνύει εάν θα συμπεριληφθεί ένα σημάδι σειράς byte (BOM) στην αρχή της εξόδου CSV. Όταν οριστεί σε "Αληθής", εγγράφεται το BOM (για παράδειγμα, UTF-8 BOM: `0xEF 0xBB 0xBF`), όταν οριστεί σε "Ψευδής", δεν περιλαμβάνεται BOM. Αυτή η επιλογή ισχύει μόνο σε σενάρια εξόδου. Η προεπιλογή είναι `false`.
-   `ExtraValues`: Ανατρέξτε στο `ExtraValues.Type` για τις υποστηριζόμενες τιμές των ExtraValues.


## Examples

### Example #1
Επεξεργασία κειμένου CSV με κεφαλίδες στηλών.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
