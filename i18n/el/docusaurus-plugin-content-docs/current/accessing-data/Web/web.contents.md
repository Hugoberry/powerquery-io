---
title: Web.Contents
---

# Web.Contents


Επιστρέφει τα περιεχόμενα που ελήφθησαν από τη διεύθυνση url ως δυαδικά.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returns the contents downloaded from `url` as binary. An optional record parameter, `options`, may be provided to specify additional properties. The record can contain the following fields:

-   `Query` : Προσθέστε μέσω προγραμματισμού παραμέτρους ερωτήματος στη διεύθυνση URL χωρίς να χρειάζεται να ανησυχείτε για διαφυγή.
-   `ApiKeyName` : Εάν η τοποθεσία προορισμού έχει μια έννοια ενός κλειδιού API, αυτή η παράμετρος μπορεί να χρησιμοποιηθεί για τον καθορισμό του ονόματος (όχι της τιμής) της παραμέτρου κλειδιού που πρέπει να χρησιμοποιηθεί στη διεύθυνση URL. Η πραγματική τιμή του κλειδιού παρέχεται στο διαπιστευτήριο.
-   `Headers` : Ο καθορισμός αυτής της τιμής ως εγγραφής θα παράσχει επιπλέον κεφαλίδες σε μια αίτηση HTTP.
-   `Timeout` : Ο καθορισμός αυτής της τιμής ως διάρκειας θα αλλάξει το χρονικό όριο για μια αίτηση HTTP. Η προεπιλεγμένη τιμή είναι 100 δευτερόλεπτα.
-   `ExcludedFromCacheKey` : Ο καθορισμός αυτής της τιμής ως λίστας θα εξαιρέσει αυτά τα κλειδιά κεφαλίδας HTTP από το να αποτελούν μέρος του υπολογισμού για την προσωρινή αποθήκευση δεδομένων.
-   `IsRetry` : Ο καθορισμός αυτής της λογικής τιμής ως true θα παραβλέπει οποιαδήποτε υπάρχουσα απόκριση στο cache κατά τη λήψη δεδομένων.
-   `ManualStatusHandling` : Ο καθορισμός αυτής της τιμής ως λίστας θα αποτρέψει οποιονδήποτε ενσωματωμένο χειρισμό για αιτήσεις HTTP των οποίων η απόκριση έχει έναν από αυτούς τους κωδικούς κατάστασης.
-   `RelativePath` : Ο καθορισμός αυτής της τιμής ως κειμένου την προσαρτά στη διεύθυνση URL βάσης πριν από την υποβολή της αίτησης.
-   `Content` : Ο καθορισμός αυτής της τιμής αλλάζει την αίτηση Web από GET σε POST, χρησιμοποιώντας την τιμή της επιλογής ως το περιεχόμενο του POST.

The HTTP request is made as either a GET (when no Content is specified) or a POST (when there is Content). POST requests may only be made anonymously.  
  
The headers of the HTTP response are available as metadata on the binary result. Outside of a custom data connector context, only a subset of response headers is available (for security reasons).


## Examples

### Example #1
Ανάκτηση των περιεχομένων του `"https://bing.com/search?q=Power+Query"` με χρήση των επιλογών RelativePath και Query. Αυτές οι επιλογές μπορούν να χρησιμοποιηθούν για δυναμική υποβολή ερωτήματος σε μια στατική διεύθυνση URL βάσης.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Εκτελέστε μια καταχώρηση σε μια διεύθυνση URL, περνώντας ένα δυαδικό ωφέλιμο φορτίο JSON και αναλύοντας την απόκριση ως JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Connect to a secure URL that accepts an authentication key as part of its query string. Instead of hard-coding the secret key in M (which would pose a security risk), the key can be provided securely by specifying its name (not its value) in M, choosing Web API authentication, and entering the key value as part of the Web API credential. When used in this way, the following example will generate a request to `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
