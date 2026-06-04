---
title: Character.FromNumber
---

# Character.FromNumber


Μετατρέπει έναν αριθμό σε χαρακτήρα κειμένου.


## Syntax

```powerquery
Character.FromNumber(
    number as number
) as text
```


## Remarks

Επιστρέφει τον ισοδύναμο χαρακτήρα του αριθμού.  
  
Η παρεχόμενη `number` πρέπει να είναι σημείο κώδικα Unicode 21 bit.


## Examples

### Example #1
Μετατροπή ενός αριθμού στην αντίστοιχη τιμή χαρακτήρα του.
```powerquery
Character.FromNumber(9)
```

Result: 
```powerquery
"#(tab)"
```


### Example #2
Μετατροπή ενός χαρακτήρα σε αριθμό και αντίστροφα.
```powerquery
Character.FromNumber(Character.ToNumber("A"))
```

Result: 
```powerquery
"A"
```


### Example #3
Μετατροπή του δεκαεξαδικού σημείου κώδικα για το emoticon " γελαστό πρόσωπο" στο αντίστοιχο ζεύγος υποκατάστατου UTF-16.
```powerquery
Character.FromNumber(0x1F600)
```

Result: 
```powerquery
"#(0001F600)"
```




## Category
Text.Conversions from and to text
