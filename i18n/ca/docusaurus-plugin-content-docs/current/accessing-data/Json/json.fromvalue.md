---
title: Json.FromValue
---

# Json.FromValue


Produeix una representació JSON d'un valor concret.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Produeix una representació JSON d'un valor concret `value` amb una codificació de text que ha especificat `encoding`. Si `encoding` s'omet, es fa servir UTF8. Els valors es representen així:

-   Els valors nuls, de text i lògics es representen amb els tipus JSON corresponents
-   Els números es representen amb els números de JSON, excepte `#infinity`, `-#infinity` i `#nan`, que es converteixen en nuls
-   Les llistes es representen amb matrius JSON
-   Els registres es representen com a objectes JSON
-   Les taules es representen amb una matriu d'objectes
-   Els valors de date, time, datetime, datetimezone i duration es representen amb text ISO-8601
-   Els valors binaris es representen amb text codificat en base 64
-   Els tipus i les funcions generen un error


## Examples

### Example #1
Converteix un valor complex a JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
