---
title: List.Percentile
---

# List.Percentile


## Description

Επιστρέφει ένα ή περισσότερα εκατοστημόρια που αντιστοιχούν στις δεδομένες πιθανότητες.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Επιστρέφει ένα ή περισσότερα δείγματα εκατοστημορίων από τη λίστα <code>list</code>. Εάν η τιμή <code>percentiles</code> είναι ένας αριθμός μεταξύ 0,0 και 1,0, θα αντιμετωπιστεί ως εκατοστημόριο και το αποτέλεσμα θα είναι    μια μεμονωμένη τιμή που αντιστοιχεί σε αυτή την πιθανότητα. Αν η τιμή <code>percentiles</code> είναι μια λίστα αριθμών με τιμές μεταξύ 0,0 και 1,0, το αποτέλεσμα θα είναι μια λίστα εκατοστημορίων    που αντιστοιχεί στην πιθανότητα εισόδου. Η επιλογή PercentileMode στο <code>options</code> μπορεί να χρησιμοποιηθεί από έμπειρους χρήστες για επιλογή πιο συγκεκριμένης μεθόδου παρεμβολής, αλλά δεν συνιστάται για τις περισσότερες χρήσεις.    Τα προκαθορισμένα σύμβολα <code>PercentileMode.ExcelInc</code> και <code>PercentileMode.ExcelExc</code> αντιστοιχούν στις μεθόδους παρεμβολής που χρησιμοποιούνται από τις συναρτήσεις του Excel    <code>PERCENTILE.INC</code> και <code>PERCENTILE.EXC</code>. Η προεπιλεγμένη συμπεριφορά αντιστοιχεί στο <code>PercentileMode.ExcelInc</code>. Τα σύμβολα    <code>PercentileMode.SqlCont</code> και <code>PercentileMode.SqlDisc</code> αντιστοιχούν στη συμπεριφορά SQL Server για τα <code>PERCENTILE_CONT</code> και    <code>PERCENTILE_DISC</code>, αντίστοιχα.  


## Examples

### Example #1 
Βρείτε το πρώτο τεταρτημόριο της λίστας &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Βρείτε τα τεταρτημόρια της λίστας &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; χρησιμοποιώντας μια μέθοδο παρεμβολής που συμφωνεί με το &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; του Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
