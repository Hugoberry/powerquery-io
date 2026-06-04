---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Επιστρέφει το αποτέλεσμα της προσπάθειας προσδιορισμού δυνατοτήτων SQL για ένα πρόγραμμα οδήγησης ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Επιστρέφει το αποτέλεσμα της προσπάθειας προσδιορισμού δυνατοτήτων SQL με τη συμβολοσειρά σύνδεσης `connectionString` με χρήση ODBC. Το `connectionString` μπορεί να είναι κείμενο ή εγγραφή ζευγών τιμής-ιδιότητας. Οι τιμές ιδιότητας μπορεί να είναι κείμενο ή αριθμός.


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
