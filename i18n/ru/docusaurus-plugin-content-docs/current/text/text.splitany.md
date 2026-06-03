---
title: Text.SplitAny
---

# Text.SplitAny


Возвращает список текстовых значений, разбитых по любому из символов в разделителе.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Возвращает список текстовых значений, полученных в результате разбиения текстового значения на основе любого из символов, указанных в разделителе.

-   `text`: текстовое значение, подлежащее разбиению.
-   `separators`: символы-разделители, используемые для разбиения текста.


## Examples

### Example #1
Создать список на основе заданного текста, используя указанные символы-разделители.
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
