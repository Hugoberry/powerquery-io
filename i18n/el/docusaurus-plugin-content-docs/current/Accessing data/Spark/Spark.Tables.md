---
title: Spark.Tables
---

# Spark.Tables


## Description

Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο καθορισμένο σύμπλεγμα Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο σύμπλεγμα Spark <code>host</code> χρησιμοποιώντας το <code>protocol</code>.  Τα έγκυρα πρωτόκολλα είναι:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Εμφανίζει τους πίνακες σε μια παρουσία του Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



