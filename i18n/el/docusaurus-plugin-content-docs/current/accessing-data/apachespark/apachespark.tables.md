---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο καθορισμένο σύμπλεγμα Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο σύμπλεγμα Spark `host` χρησιμοποιώντας το `protocol`. Τα έγκυρα πρωτόκολλα είναι: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Επιστρέφει έναν πίνακα που εμφανίζει τους πίνακες στο καθορισμένο σύμπλεγμα Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



