---
title: Text.Split
---

# Text.Split


Tekstas išskaidomas į tekstinių reikšmių sąrašą, atsižvelgiant į nurodytą skyriklį.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Pateikiamas tekstinių reikšmių sąrašas, gautas išskaidžius tekstinę reikšmę pagal nurodytą skyriklį.

-   `text`: teksto reikšmė, kurią reikia skaidyti.
-   `separator`: skyriklis, naudojamas tekstui skaidyti. Skyriklis gali būti vienas simbolis arba simbolių seka. Jei naudojama simbolių seka, tekstas dalijamas tik tais atvejais, kai seka pasitaiko tiksliai.


## Examples

### Example #1
Sukurkite sąrašą iš „|“ atskirtos tekstinės reikšmės „Name|Address|PhoneNumber“.
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
Sukurkite sąrašą iš teksto reikšmės naudodami simbolių seką.
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
