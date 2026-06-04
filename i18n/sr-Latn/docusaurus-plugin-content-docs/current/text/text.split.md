---
title: Text.Split
---

# Text.Split


Deli tekst na listu tekstualnih vrednosti na osnovu navedenog znaka za razgraničavanje.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Vraća listu tekstualnih vrednosti koje nastaju usled razdeljivanja tekstualne vrednosti na osnovu navedenog znaka za razgraničavanje.

-   `text`Vrednost teksta koji treba razdeliti.
-   `separator`Znak za razgraničavanje koji se koristi za deljenje teksta. Znak za razgraničavanje može biti ili jedan znak ili niz znakova. Ako se koristi niz znakova, tekst se deli samo na mestima gde se tačan redosled pojavljuje.


## Examples

### Example #1
Kreiranje liste od tekstualne vrednosti „Name|Address|PhoneNumber“ razgraničene pomoću znaka „|“.
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
Kreirajte listu iz tekstualne vrednosti pomoću niza znakova.
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
