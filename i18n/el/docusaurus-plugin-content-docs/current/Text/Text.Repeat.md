---
title: Text.Repeat
---

# Text.Repeat


## Description

Επιστρέφει μια τιμή κειμένου που αποτελείται από το κείμενο εισόδου το οποίο έχει επαναληφθεί έναν καθορισμένο αριθμό φορών.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Επιστρέφει μια τιμή κειμένου που αποτελείται από το κείμενο εισόδου <code>text</code> το οποίο έχει επαναληφθεί <code>count</code> φορές.


## Examples

### Example #1 
Επαναλάβετε το κείμενο &#34;a&#34; πέντε φορές.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Επαναλάβετε το κείμενο &#34;helloworld&#34; τρεις φορές.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
