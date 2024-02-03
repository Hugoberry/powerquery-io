---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Επιστρέφει το αποτέλεσμα της προσπάθειας προσδιορισμού δυνατοτήτων SQL για ένα πρόγραμμα οδήγησης ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Επιστρέφει το αποτέλεσμα της προσπάθειας προσδιορισμού δυνατοτήτων SQL με τη συμβολοσειρά σύνδεσης <code>connectionString</code> με χρήση ODBC. Το <code>connectionString</code> μπορεί να είναι κείμενο ή εγγραφή ζευγών τιμής-ιδιότητας. Οι τιμές ιδιότητας μπορεί να είναι κείμενο ή αριθμός.


## Examples

### Example #1 
Επιστροφή των συναγόμενης δυνατοτήτων SQL για μια συμβολοσειρά σύνδεσης.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
