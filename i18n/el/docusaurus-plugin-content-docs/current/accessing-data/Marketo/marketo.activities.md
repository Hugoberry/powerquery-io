---
title: Marketo.Activities
---

# Marketo.Activities


Επιστρέφει έναν πίνακα με δραστηριότητες υποψήφιου πελάτη.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Κάνει κλήση στο τελικό σημείο API REST Marketo στο `url`/rest/v1/activities.json. Επιστρέφονται όλες οι δραστηριότητες στη λίστα `activityIds` που προέκυψαν από το `startTime` και έπειτα.


## Examples

### Example #1
Έλκει έναν πίνακα δραστηριοτήτων "Επίσκεψη ιστοσελίδας" από την 1η Νοεμβρίου 2015 και έπειτα
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Ένας πίνακας με λεπτομέρειες όλων των δραστηριοτήτων "Επίσκεψη ιστοσελίδας" από την 1η Νοεμβρίου και έπειτα
```



