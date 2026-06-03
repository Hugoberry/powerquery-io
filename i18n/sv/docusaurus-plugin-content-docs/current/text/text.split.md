---
title: Text.Split
---

# Text.Split


Delar upp texten i en lista med textvärden baserat på en angiven avgränsare.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Returnerar en lista med textvärden som resulterar från uppdelningen av ett textvärdeBbaserat på den angivna avgränsaren.

-   `text`: Textvärdet att koda.
-   `separator`: Den avgränsare som används för att dela upp texten. Avgränsaren kan vara antingen ett enskilt tecken eller en sekvens av tecken. Om en sekvens av tecken används, delas texten endast vid de tillfällen där den exakta sekvensen förekommer.


## Examples

### Example #1
Skapa en lista från det "|"-avgränsade textvärdet "Name|Address|PhoneNumber".
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
Skapa en lista från textvärdet med en sekvens av tecken.
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
