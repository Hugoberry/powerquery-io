---
title: Character.ToNumber
---

# Character.ToNumber


## Description

Μετατρέπει έναν χαρακτήρα σε αριθμητική τιμή.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Details

Επιστρέφει τον αντίστοιχο αριθμό του <code>character</code>.<br />    <br />    Το αποτέλεσμα θα είναι το σημείο κώδικα Unicode 21 bit που αντιπροσωπεύεται από το παρεχόμενο ζεύγος χαρακτήρων ή υποκατάστατου.  


## Examples

### Example #1 
Μετατροπή ενός χαρακτήρα στην αντίστοιχη αριθμητική τιμή του.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2 
Μετατροπή του ζεύγους υποκατάστατου UTF-16 για το emoticon &#34; γελαστό πρόσωπο&#34; στο αντίστοιχο δεκαεξαδικό σημείο κώδικα.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
