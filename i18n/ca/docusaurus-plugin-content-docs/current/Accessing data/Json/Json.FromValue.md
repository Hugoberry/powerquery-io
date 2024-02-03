---
title: Json.FromValue
---

# Json.FromValue


## Description

Produeix una representació JSON d&#39;un valor concret.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Produeix una representació JSON d'un valor concret <code>value</code> amb una codificació de text que ha especificat <code>encoding</code>. Si <code>encoding</code> s'omet, es fa servir UTF8. Els valors es representen així:<br /> <ul>        <li>Els valors nuls, de text i lògics es representen amb els tipus JSON corresponents</li>        <li>Els números es representen amb els números de JSON, excepte <code>#infinity</code>, <code>-#infinity</code> i <code>#nan</code>, que es converteixen en nuls</li>        <li>Les llistes es representen amb matrius JSON</li>        <li>Els registres es representen amb objectes JSON</li>        <li>Les taules es representen amb una matriu d'objectes</li>        <li>Els valors de date, time, datetime, datetimezone i duration es representen amb text ISO-8601</li>        <li>Els valors binaris es representen amb text codificat en base 64</li>        <li>Els tipus i les funcions generen un error</li> </ul>    


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
