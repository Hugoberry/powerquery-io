---
title: Character.ToNumber
---

# Character.ToNumber


Converteert een teken naar een getalwaarde.


## Syntax

```powerquery
Character.ToNumber(
    character as text
) as number
```


## Remarks

Retourneert het getalequivalent van de `character`.  
  
Het resultaat is het 21 bits Unicode-codepunt dat wordt vertegenwoordigd door het opgegeven teken of surrogaatpaar.


## Examples

### Example #1
Een teken naar de overeenkomstige getalwaarde converteren.
```powerquery
Character.ToNumber("#(tab)")
```

Result: 
```powerquery
9
```


### Example #2
Het UTF-16-surrogaatpaar voor de emoticon 'grijnzend gezicht' converteren naar het equivalente hexadecimale codepunt.
```powerquery
Number.ToText(Character.ToNumber("#(0001F600)"), "X")
```

Result: 
```powerquery
"1F600"
```




## Category
Text.Conversions from and to text
