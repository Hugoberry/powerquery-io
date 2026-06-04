---
title: Text.Split
---

# Text.Split


Razdeli besedilo v seznam besedilnih vrednosti glede na navedeno ločilo.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Vrne seznam besedilnih vrednosti, ki nastane z razdelitvijo besedilne vrednosti glede na navedeno ločilo.

-   `text`: Besedilna vrednost za razdelitev.
-   `separator`: Ločilo, uporabljeno za razdelitev besedila. Ločilo je lahko en znak ali zaporedje znakov. Če uporabite zaporedje znakov, je besedilo razdeljeno le na mestih, kjer je na voljo točno tako zaporedje.


## Examples

### Example #1
Ustvarite seznam iz besedilne vrednosti"Name|Address|PhoneNumber", ločene z"|".
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
Ustvarite seznam iz besedilne vrednosti z uporabo zaporedja znakov.
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
