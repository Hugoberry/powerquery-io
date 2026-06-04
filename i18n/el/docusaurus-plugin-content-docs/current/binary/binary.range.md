---
title: Binary.Range
---

# Binary.Range


Επιστρέφει ένα υποσύνολο της δυαδικής τιμής αρχίζοντας από μετατόπιση.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Επιστρέφει ένα υποσύνολο της δυαδικής τιμής αρχίζοντας από μετατόπιση `binary`. Μια προαιρετική παράμετρος `offset` ορίζει το μέγιστο μήκος του υποσυνόλου.


## Examples

### Example #1
Επιστρέφει ένα υποσύνολο της δυαδικής τιμής ξεκινώντας από μετατόπιση 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2
Επιστρέφει ένα υποσύνολο μήκους 2 από μετατόπιση 6 της δυαδικής τιμής.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
