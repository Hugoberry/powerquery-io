---
title: Text.Split
---

# Text.Split


Dzieli tekst na listę wartości tekstowych, używając określonego ogranicznika.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Zwraca listę wartości tekstowych wynikających z podziału wartości tekstowej na podstawie określonego ogranicznika.

-   `text`: wartość tekstowa do podzielenia.
-   `separator`: ogranicznik używany do podzielenia tekstu. Ogranicznik może być pojedynczym znakiem lub sekwencją znaków. Jeśli jest używana sekwencja znaków, tekst jest dzielony tylko w wystąpieniach, w których występuje dokładna sekwencja.


## Examples

### Example #1
Utwórz listę na podstawie rozdzielanej znakami „|” wartości tekstowej „Name|Address|PhoneNumber”.
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
Utwórz listę na podstawie wartości tekstowej przy użyciu sekwencji znaków.
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
