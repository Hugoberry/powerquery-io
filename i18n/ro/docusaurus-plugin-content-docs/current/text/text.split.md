---
title: Text.Split
---

# Text.Split


Divizează textul într-o listă de valori text în funcţie de un delimitator specificat.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Returnează o listă de valori text care rezultă din scindarea unei valori text pe baza delimitatorului specificat.

-   `text`: valoarea text de scindat.
-   `separator`: delimitatorul utilizat pentru a scinda textul. Delimitatorul poate fi un caracter unic sau o secvență de caractere. Dacă se utilizează o secvență de caractere, textul este scindat doar în instanțele în care are loc secvența exactă.


## Examples

### Example #1
Creaţi o listă din valoarea text delimitată de „|” „Name|Address|PhoneNumber”.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```


### Example #2
Creați o listă din valoarea text utilizând o secvență de caractere.
```powerquery
Text.Split("Name, the Customer, the Purchase Date", ", the ")
```

Result: 
```powerquery
{
    "Name",
    "Customer",
    "Purchase Date"
}
```




## Category
Text.Transformations
