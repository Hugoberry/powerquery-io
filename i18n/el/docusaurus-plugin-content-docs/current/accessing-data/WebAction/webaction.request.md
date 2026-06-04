---
title: WebAction.Request
---

# WebAction.Request


Δημιουργεί μια ενέργεια η οποία, όταν εκτελεστεί, θα επιστρέψει τα αποτελέσματα εκτέλεσης μιας αίτησης HTTP ως δυαδικής τιμής.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Creates an action that, when executed, will return the results of performing a `method` request against `url` using HTTP as a binary value. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Query` : Προσθέστε μέσω προγραμματισμού παραμέτρους ερωτήματος στη διεύθυνση URL χωρίς να χρειάζεται να ανησυχείτε για διαφυγή.
-   `ApiKeyName` : Εάν η τοποθεσία προορισμού έχει μια έννοια ενός κλειδιού API, αυτή η παράμετρος μπορεί να χρησιμοποιηθεί για τον καθορισμό του ονόματος (όχι της τιμής) της παραμέτρου κλειδιού που πρέπει να χρησιμοποιηθεί στη διεύθυνση URL. Η πραγματική τιμή του κλειδιού παρέχεται στο διαπιστευτήριο.
-   `Headers` : Ο καθορισμός αυτής της τιμής ως εγγραφής θα παράσχει επιπλέον κεφαλίδες σε μια αίτηση HTTP.
-   `Timeout` : Ο καθορισμός αυτής της τιμής ως διάρκειας θα αλλάξει το χρονικό όριο για μια αίτηση HTTP. Η προεπιλεγμένη τιμή είναι 100 δευτερόλεπτα.
-   `ExcludedFromCacheKey` : Ο καθορισμός αυτής της τιμής ως λίστας θα εξαιρέσει αυτά τα κλειδιά κεφαλίδας HTTP από το να αποτελούν μέρος του υπολογισμού για την προσωρινή αποθήκευση δεδομένων.
-   `IsRetry` : Ο καθορισμός αυτής της λογικής τιμής ως true θα παραβλέπει οποιαδήποτε υπάρχουσα απόκριση στο cache κατά τη λήψη δεδομένων.
-   `ManualStatusHandling` : Ο καθορισμός αυτής της τιμής ως λίστας θα αποτρέψει οποιονδήποτε ενσωματωμένο χειρισμό για αιτήσεις HTTP των οποίων η απόκριση έχει έναν από αυτούς τους κωδικούς κατάστασης.
-   `RelativePath` : Ο καθορισμός αυτής της τιμής ως κειμένου την προσαρτά στη διεύθυνση URL βάσης πριν από την υποβολή της αίτησης.
-   `Content` : Ο καθορισμός αυτής της τιμής θα έχει ως αποτέλεσμα τα περιεχόμενά της να αποτελέσουν το σώμα της αίτησης HTTP.

Note that this function is disabled in most contexts. Consider using Web.Contents or Web.Headers instead.


## Examples

### Example #1
Εκτέλεση αίτησης GET κατά του Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
