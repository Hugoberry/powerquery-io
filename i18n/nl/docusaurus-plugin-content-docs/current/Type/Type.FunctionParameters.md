---
title: Type.FunctionParameters
---

# Type.FunctionParameters


Retourneert een record met veldwaarden die zijn ingesteld op de naam van de parameters van een functietype, waarbij hun waarden zijn ingesteld op de overeenkomende typen.


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

Retourneert een record met veldwaarden die zijn ingesteld op de naam van de parameters van <code>type</code>, waarbij hun waarden zijn ingesteld op de overeenkomende typen.


## Examples

### Example #1 
Zoek de typen parameters voor de functie &lt;code&gt;(x als getal, y als tekst)&lt;/code&gt;.
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
