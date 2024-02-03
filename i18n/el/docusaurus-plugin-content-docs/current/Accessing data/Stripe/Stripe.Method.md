---
title: Stripe.Method
---

# Stripe.Method


## Description

Κάνει μια κλήση στο API Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Κάνει μια κλήση στο API Stripe στο https://api.stripe.com/v1/<code>method</code>, με την εγγραφή <code>additionalParameters</code> να διαβιβάζεται ως πρόσθετοι παράμετροι και τη λίστα <code>ColumnNames</code> των αναμενόμενων ονομάτων στηλών. Χρησιμοποιείται η έκδοση Stripe 2015-10-16.


## Examples

### Example #1 
Επιστρέφει έναν πίνακα με συμβάντα που δημιουργήθηκαν μετά την 1η Νοεμβρίου 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Ένας πίνακας με τα καθορισμένα συμβάντα για τον τρέχοντα λογαριασμό Stripe
```


### Example #2 
Επιστρέφει έναν πίνακα με όλα τα SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Ένας πίνακας με όλα τα SKU για τον τρέχοντα λογαριασμό Stripe
```



