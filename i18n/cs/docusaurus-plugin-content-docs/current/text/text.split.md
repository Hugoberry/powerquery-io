---
title: Text.Split
---

# Text.Split


Rozdělí text na seznam textových hodnot na základě určeného oddělovače.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Vrátí seznam textových hodnot, které jsou výsledkem rozdělení textové hodnoty na základě zadaného oddělovače.

-   `text`: Textová hodnota, která se má rozdělit
-   `separator`: Oddělovač použitý k rozdělení textu. Oddělovač může být buď jeden znak, nebo posloupnost znaků. Pokud je použita sekvence znaků, je text rozdělen pouze v případech, kdy se vyskytuje přesná posloupnost znaků.


## Examples

### Example #1
Vytvoří seznam z textové hodnoty Name|Address|PhoneNumber obsahující oddělovač |.
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
Vytvoří seznam z textové hodnoty pomocí posloupnosti znaků.
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
