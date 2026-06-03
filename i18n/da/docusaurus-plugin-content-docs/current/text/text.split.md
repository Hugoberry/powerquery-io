---
title: Text.Split
---

# Text.Split


Opdeler tekst i en liste over tekstværdier ved hjælp af en angivet afgrænser.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Returnerer en liste over tekstværdier, der er resultatet af opdelingen af en tekstværdi baseret på den angivne afgrænser.

-   `text`: Den tekstværdi, der skal opdeles.
-   `separator`: Den afgrænser, der bruges til at opdele teksten. Afgrænseren kan enten være et enkelt tegn eller en sekvens af tegn. Hvis der bruges en sekvens af tegn, opdeles teksten kun i forekomster, hvor den nøjagtige sekvens forekommer.


## Examples

### Example #1
Opret en liste ud fra tekstværdien "Name|Address|PhoneNumber" med afgrænseren "|".
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
Opret en liste ud fra tekstværdien ved hjælp af en række tegn.
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
