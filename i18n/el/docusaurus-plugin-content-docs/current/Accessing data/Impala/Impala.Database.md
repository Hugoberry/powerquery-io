---
title: Impala.Database
---

# Impala.Database


## Description

Εισάγει δεδομένα από ένα σύμπλεγμα Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Εισάγει δεδομένα από ένα σύμπλεγμα Impala <code>server</code>. Αν δεν έχει καθοριστεί πύλη, θα χρησιμοποιηθεί η προεπιλεγμένη πύλη 21050.


## Examples

### Example #1 
Καταχωρεί τους πίνακες σε ένα σύμπλεγμα Impala.
```powerquery
Impala.Database("localhost:21050")
```



