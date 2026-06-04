---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Επιστρέφει την τρέχουσα ημερομηνία και ώρα στην τοπική ζώνη ώρας.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Επιστρέφει μια `τιμή` datetime που έχει οριστεί στην τρέχουσα ημερομηνία και ώρα του συστήματος.  
  
Η τιμή που επιστρέφεται από αυτήν τη συνάρτηση εξαρτάται από το αν εκτελείτε το ερώτημά σας σε τοπικό υπολογιστή ή σε σύνδεση. Για παράδειγμα, αν εκτελέσετε το ερώτημά σας σε ένα σύστημα που βρίσκεται στη ζώνη ώρας Ειρηνικού των Η.Π.Α., Power Query Επιφάνεια εργασίας επιστρέφει την ημερομηνία και την ώρα που έχει οριστεί στον τοπικό υπολογιστή σας. Ωστόσο, αν εκτελέσετε το ερώτημά σας στο cloud, το Power Query Online επιστρέφει χρόνο UTC, επειδή διαβάζει το χρόνο που έχει οριστεί στις εικονικές μηχανές cloud, οι οποίες είναι όλες ρυθμισμένες σε UTC.


## Examples

### Example #1
Κλήση αυτής της συνάρτησης σε τοπικό υπολογιστή που εκτελεί Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Κλήση αυτής της συνάρτησης στο cloud που εκτελείται Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
