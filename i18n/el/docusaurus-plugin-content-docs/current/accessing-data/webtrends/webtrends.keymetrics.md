---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Επιστρέφει έναν πίνακα με βασικά μετρικά Webtrends.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Πραγματοποιεί μια κλήση στο τελικό σημείο KeyMetrics του Webtrends και επιστρέφει όλα τα δεδομένα ως πίνακα.


## Examples

### Example #1
Έλκει έναν πίνακα βασικών μετρικών για το μισθωτή 98765 τις τελευταίες 30 ημέρες
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Ένας πίνακας βασικών μετρικών
```



