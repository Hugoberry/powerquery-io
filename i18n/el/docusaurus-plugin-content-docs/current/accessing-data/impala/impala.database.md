---
title: Impala.Database
---

# Impala.Database


Εισάγει δεδομένα από ένα σύμπλεγμα Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Εισάγει δεδομένα από ένα σύμπλεγμα Impala `server`. Αν δεν έχει καθοριστεί πύλη, θα χρησιμοποιηθεί η προεπιλεγμένη πύλη 21050.


## Examples

### Example #1
Καταχωρεί τους πίνακες σε ένα σύμπλεγμα Impala.
```powerquery
Impala.Database("localhost:21050")
```



