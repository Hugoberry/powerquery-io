---
title: Text.Split
---

# Text.Split


Felosztja a szöveget szöveges értékek listájára a megadott elválasztó alapján.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Szöveges értékek olyan listáját adja vissza, amely egy szöveges értéknek a megadott elválasztó alapján történő felosztásának eredménye.

-   `text`: A felosztandó szöveges érték.
-   `separator`: A szöveg felosztásához használandó elválasztó karakter. Az elválasztó karakter lehet egyetlen karakter vagy egy karaktersorozat. Ha karaktersorozatot használ, a szöveg csak olyan esetekben lesz felosztva, ahol a pontos sorrend előfordul.


## Examples

### Example #1
Lista létrehozása a „|” karakterrel elválasztott „Name|Address|PhoneNumber” szöveges értékből
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
Lista létrehozása a szöveges értékből karaktersorozat használatával.
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
