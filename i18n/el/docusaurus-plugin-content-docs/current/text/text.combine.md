---
title: Text.Combine
---

# Text.Combine


Συνενώνει μια λίστα τιμών κειμένου σε μία τιμή κειμένου.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα του συνδυασμού της λίστας τιμών κειμένου, `texts`σε μία μόνο τιμή κειμένου. Όλες οι τιμές `null` που υπάρχουν στο `texts` παραβλέπονται. Μπορεί να καθοριστεί ένα προαιρετικό `separator` που χρησιμοποιείται στο τελικό συνδυασμένο κείμενο.


## Examples

### Example #1
Συνδυάστε τις τιμές κειμένου "Seattle" και "WA".
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2
Συνδυάστε τις τιμές κειμένου "Seattle" και "WA", διαχωρισμένες με κόμμα και κενό διάστημα.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3
Συνδυάστε τις τιμές "Seattle", `null` και "WA", που διαχωρίζονται με κόμμα και κενό διάστημα. (Σημειώστε ότι το `null` παραβλέπεται.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #4
Συνδυάστε το όνομα, το μεσαίο αρχικό (αν υπάρχει) και το επώνυμο στο πλήρες όνομα του ατόμου.
```powerquery
let
    Source = Table.FromRecords({
        [First Name = "Doug", Middle Initial = "J", Last Name = "Elis"],
        [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew"],
        [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova"]
    }),
    FullName = Table.AddColumn(Source, "Full Name", each Text.Combine({[First Name], [Middle Initial], [Last Name]}, " "))
in
    FullName
```

Result: 
```powerquery
Table.FromRecords({
    [First Name = "Doug", Middle Initial = "J", Last Name = "Elis", Full Name = "Doug J Elis"],
    [First Name = "Anna", Middle Initial = "M", Last Name = "Jorayew", Full Name = "Anna M Jorayew"],
    [First Name = "Rada", Middle Initial = null, Last Name = "Mihaylova", Full Name = "Rada Mihaylova"]
})
```




## Category
Text.Transformations
