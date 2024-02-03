---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


## Description

Retourneert een getal waarmee het minimum aantal parameters wordt aangegeven dat is vereist om het type functie aan te roepen.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Details

Retourneert een getal waarmee het minimum aantal parameters wordt aangegeven dat is vereist om de invoer <code>type</code> van de functie aan te roepen.


## Examples

### Example #1 
Zoek het aantal vereiste parameters voor de functie &lt;code&gt;(x als getal, optioneel y als tekst)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
