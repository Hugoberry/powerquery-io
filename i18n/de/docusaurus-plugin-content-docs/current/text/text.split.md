---
title: Text.Split
---

# Text.Split


Teilt Text auf der Grundlage eines angegebenen Trennzeichens in eine Liste mit Textwerten auf.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Gibt eine Liste mit Textwerten zurück, für die ein Textwert auf der Grundlage des angegebenen Trennzeichens aufgeteilt wurde.

-   `text`: Der zu teilende Textwert.
-   `separator`: Das Trennzeichen, das zum Teilen des Textes verwendet werden soll. Das Trennzeichen kann entweder ein einzelnes Zeichen oder eine Sequenz von Zeichen sein. Wenn eine Sequenz von Zeichen verwendet wird, wird der Text nur an Instanzen aufgeteilt, in denen die genaue Sequenz auftritt.


## Examples

### Example #1
Erstellt eine Liste auf der Grundlage des Textwerts "Name|Address|PhoneNumber" mit dem Trennzeichen "|".
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
Erstellen Sie eine Liste aus dem Textwert mithilfe einer Sequenz von Zeichen.
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
