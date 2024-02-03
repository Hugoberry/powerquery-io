---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Κάνει μια κλήση στο API Stripe, με την επιλογή περιορισμού του αριθμού κλήσεων API που γίνονται.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Κάνει μια κλήση στο API Stripe στο https://api.stripe.com/v1/<code>method</code>, με την προαιρετική εγγραφή <code>query</code> να διαβιβάζεται ως πρόσθετοι παράμετροι και το προαιρετικό <code>pageLimit</code> ως όριο στον αριθμό αιτήσεων API. Τα πιο πρόσφατα δεδομένα επιστρέφονται πρώτα. Αν δεν καθοριστεί <code>pageLimit</code>, επιστρέφονται όλα τα δεδομένα. Χρησιμοποιείται η έκδοση Stripe 2015-10-16.


## Examples

### Example #1 
Επιστρέφει όλα τα δεδομένα χρεώσεων
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Ένας πίνακας με όλα τα δεδομένα χρεώσεων για τον τρέχοντα λογαριασμό Stripe
```


### Example #2 
Επιστρέφει μια σελίδα με δεδομένα χρεώσεων
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Ένας πίνακας με τα πιο πρόσφατα δεδομένα χρεώσεων για τον τρέχοντα λογαριασμό Stripe
```



