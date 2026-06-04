---
title: Text.Split
---

# Text.Split


Teksts tiek sadalīts teksta vērtību sarakstā, pamatojoties uz norādīto norobežotāju.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Tiek atgriezts teksta vērtību saraksts, kas tiek iegūts, sadalot teksta vērtību, pamatojoties uz norādīto norobežotāju.

-   `text`: Sadalāmā teksta vērtība.
-   `separator`: Norobežotājs, ko izmanto teksta sadalīšanai. Norobežotājs var būt viena rakstzīme vai rakstzīmju secība. Ja tiek izmantota rakstzīmju secība, teksts tiek sadalīts tikai gadījumos, kad notiek precīza secība.


## Examples

### Example #1
Izveidojiet sarakstu no "|" norobežotās teksta vērtības "Name|Address|PhoneNumber".
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
Izveidojiet sarakstu no teksta vērtības, izmantojot rakstzīmju secību.
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
