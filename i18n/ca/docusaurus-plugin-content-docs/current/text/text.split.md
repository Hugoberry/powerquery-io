---
title: Text.Split
---

# Text.Split


Divideix text en una llista de valors de text basant-se en un delimitador especificat.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Retorna una llista de valors de text que resulta de dividir un valor de text en funció del delimitador especificat .

-   `text`: valor de text que es dividirà.
-   `separator`: delimitador que s'utilitzarà per dividir el text. El delimitador pot ser un sol caràcter o una seqüència. Si s'utilitza una seqüència de caràcters, el text només es divideix en instàncies en què es produeix la seqüència exacta.


## Examples

### Example #1
Crea una llista a partir del valor de text delimitat amb "|", "Nom|Adreça|NúmeroDeTelèfon".
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
Crea una llista a partir del valor de text utilitzant una seqüència de caràcters.
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
