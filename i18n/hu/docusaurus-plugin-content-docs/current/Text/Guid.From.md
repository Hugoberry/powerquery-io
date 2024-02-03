---
title: Guid.From
---

# Guid.From


## Description

GUID értéket ad vissza az adott elemből.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Egy <code>Guid.Type</code> értéket ad vissza az adott <code>value</code> elemből. Ha a megadott <code>value</code> <code>null</code>, a <code>Guid.From</code> <code>null</code> értéket ad vissza.  A rendszer ellenőrzi, hogy a megadott <code>value</code> formátuma elfogadható-e. Az elfogadható formátumok a példákban vannak megadva.


## Examples

### Example #1 
A GUID 32 összefüggő hexadecimális számjegyeként is megadható.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
A Guid összesen 32, kötőjelekkel 8-4-4-4-12 karakteres szakaszokra osztott hexadecimális számjegyként is megadható.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
A GUID megadható 32 hexadecimális számjegyként is, ahol minden számjegyet kötőjel választ el, és kapcsos zárójelek között található.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
A GUID megadható 32 hexadecimális számjegyként is, ahol minden számjegyet kötőjel választ el, és zárójelek között található.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
