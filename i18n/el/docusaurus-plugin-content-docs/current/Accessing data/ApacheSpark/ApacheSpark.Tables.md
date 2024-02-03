---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο καθορισμένο σύμπλεγμα Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο σύμπλεγμα Spark <code>host</code> χρησιμοποιώντας το <code>protocol</code>.  Τα έγκυρα πρωτόκολλα είναι:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο καθορισμένο σύμπλεγμα Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



