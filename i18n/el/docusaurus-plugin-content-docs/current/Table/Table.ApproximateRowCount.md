---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

Επιστρέφει τον κατά προσέγγιση αριθμό γραμμών στον πίνακα.


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

Επιστρέφει τον κατά προσέγγιση αριθμό σειρών στο <code>table</code>, ή ένα σφάλμα αν η πηγή δεδομένων δεν υποστηρίζει την προσέγγιση.


## Examples

### Example #1 
Υπολογίστε τον αριθμό των διακριτών συνδυασμών πόλης και πολιτείας σε έναν μεγάλο πίνακα, ο οποίος μπορεί να χρησιμοποιηθεί ως εκτίμηση της βασικότητας για τις στήλες. Οι εκτιμήσεις πληθώρας είναι αρκετά σημαντικές ώστε διάφορες πηγές δεδομένων (όπως ο SQL Server) να υποστηρίζουν αυτήν τη συγκεκριμένη προσέγγιση, χρησιμοποιώντας συχνά έναν αλγόριθμο που ονομάζεται HyperLogLog.
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
