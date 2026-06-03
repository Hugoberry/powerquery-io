---
title: Text.Split
---

# Text.Split


Fractionne le texte dans une liste de valeurs de texte en fonction d'un délimiteur spécifié.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Retourne une liste de valeurs de texte résultant du fractionnement d'une valeur de texte selon le séparateur spécifié .

-   `text` : La valeur de texte à fractionner.
-   `separator` : Le délimiteur utilisé pour diviser le texte. Le délimiteur peut être un caractère unique ou une séquence de caractères. Si une séquence de caractères est utilisée, le texte n'est fractionné qu'aux endroits où la séquence exacte apparaît.


## Examples

### Example #1
Crée une liste à partir de la valeur de texte délimitée par « | » « Name|Address|PhoneNumber ».
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
Créer une liste à partir de la valeur du texte en utilisant une séquence de caractères.
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
