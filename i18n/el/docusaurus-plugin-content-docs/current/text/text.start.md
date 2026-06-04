---
title: Text.Start
---

# Text.Start


Επιστρέφει την αρχή του κειμένου.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Επιστρέφει τους πρώτους `count` χαρακτήρες του `text` ως τιμή κειμένου.


## Examples

### Example #1
Λάβετε τους πρώτους 5 χαρακτήρες του κειμένου "Hello, World".
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Χρησιμοποιήστε τους τέσσερις πρώτους χαρακτήρες του ονόματος και τους τρεις πρώτους χαρακτήρες του επωνύμου για να δημιουργήσετε τη διεύθυνση ηλεκτρονικού ταχυδρομείου ενός ατόμου.
```powerquery
let
    Source = #table(type table [First Name = text, Last Name = text],
    {
        {"Douglas", "Elis"},
        {"Ana", "Jorayew"},
        {"Rada", "Mihaylova"}
    }),
    EmailAddress = Table.AddColumn(
        Source,
        "Email Address",
        each Text.Combine({
            Text.Start([First Name], 4),
            Text.Start([Last Name], 3),
            "@contoso.com"
        })
    )
in
    EmailAddress
```

Result: 
```powerquery
#table(type table [First Name = text, Last Name = text, Email Address = text],
{
    {"Douglas", "Elis", "DougEli@contoso.com"},
    {"Ana", "Jorayew", "AnaJor@contoso.com"},
    {"Rada", "Mihaylova", "RadaMih@contoso.com"}
})
```




## Category
Text.Extraction
