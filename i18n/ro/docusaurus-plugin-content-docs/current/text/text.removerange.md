---
title: Text.RemoveRange
---

# Text.RemoveRange


Elimină un număr de caractere care începe la decalajul dat.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Returnează o copie a valorii text `text`, cu toate caracterele de la poziția `offset` eliminate. Poate fi utilizat un parametru opțional, `count`, pentru a specifica numărul de caractere de eliminat. Valoarea implicită a `count` este 1. Valorile pentru poziție încep de la 0.


## Examples

### Example #1
Eliminaţi 1 caracter din valoarea text „ABEFC” la poziţia 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Eliminaţi două caractere din valoarea text „ABEFC” începând cu poziţia 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
