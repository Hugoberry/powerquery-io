---
title: Text.SplitAny
---

# Text.SplitAny


Повертає список текстових значень, розділених за будь-яким символом у роздільнику.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Повертає список текстових значень, отриманих внаслідок розділення текстового значення на основі будь-якого символу, зазначеного в роздільнику.

-   `text`: текстове значення, яке потрібно розділити.
-   `separators`: символи-роздільники, які використовуються для розділення тексту.


## Examples

### Example #1
Створіть список із заданого тексту, використовуючи вказані символи-роздільники.
```powerquery
Text.SplitAny("Name|Customer ID|Purchase|Month-Day-Year", "|-")
```

Result: 
```powerquery
{
    "Name",
    "Customer ID",
    "Purchase",
    "Month",
    "Day",
    "Year"
}
```




## Category
Text.Transformations
