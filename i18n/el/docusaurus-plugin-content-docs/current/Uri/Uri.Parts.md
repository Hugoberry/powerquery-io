---
title: Uri.Parts
---

# Uri.Parts


## Description

Επιστρέφει τα μέρη του απόλυτου URI εισόδου ως εγγραφή.


## Syntax

```powerquery
Uri.Parts(
    absoluteUri as text
) as record
```


## Details

Επιστρέφει τα μέρη της εισόδου <code>absoluteUri</code> ως εγγραφή, περιέχοντας τιμές όπως Σχήμα, Κεντρικός υπολογιστής, Θύρα, Διαδρομή, Ερώτημα, Τμήμα, Όνομα χρήστη και Κωδικός πρόσβασης.


## Examples

### Example #1 
Βρείτε τα μέρη του απόλυτου URI &#34;www.adventure-works.com&#34;.
```powerquery
Uri.Parts("www.adventure-works.com")
```

Result: 
```powerquery
[
    Scheme = "http",
    Host = "www.adventure-works.com",
    Port = 80,
    Path = "/",
    Query = [],
    Fragment = "",
    UserName = "",
    Password = ""
]
```


### Example #2 
Αποκωδικοποιήστε μια συμβολοσειρά με ποσοστιαία κωδικοποίηση.
```powerquery
let
    UriUnescapeDataString = (data as text) as text => Uri.Parts("http://contoso?a=" & data)[Query][a]
in
    UriUnescapeDataString("%2Bmoney%24")
```

Result: 
```powerquery
"+money$"
```




## Category
Uri
