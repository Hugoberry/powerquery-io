---
title: Text.Split
---

# Text.Split


Rozdelí text do zoznamu textových hodnôt na základe stanoveného oddeľovača.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Vráti zoznam textových hodnôt, ktorý je výsledkom rozdelenia textovej hodnoty na základe stanoveného oddeľovača.

-   `text`: Textová hodnota na rozdelenie.
-   `separator`: Oddeľovač použitý na rozdelenie textu. Oddeľovač môže byť buď jeden znak, alebo postupnosť znakov. Ak sa použije postupnosť znakov, text sa rozdelí iba v prípadoch, kde sa vyskytuje presná postupnosť.


## Examples

### Example #1
Vytvorte zoznam z textovej hodnoty "Name|Address|PhoneNumber" oddelenej znakom "|".
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
Vytvorí zoznam z textovej hodnoty pomocou postupnosti znakov.
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
