---
title: Text.Repeat
---

# Text.Repeat


Επιστρέφει μια τιμή κειμένου που αποτελείται από το κείμενο εισόδου το οποίο έχει επαναληφθεί έναν καθορισμένο αριθμό φορών.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Επιστρέφει μια τιμή κειμένου που αποτελείται από το κείμενο εισόδου `text` το οποίο έχει επαναληφθεί `count` φορές.


## Examples

### Example #1
Επαναλάβετε το κείμενο "a" πέντε φορές.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Επαναλάβετε το κείμενο "helloworld" τρεις φορές.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
